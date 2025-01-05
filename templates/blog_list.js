import {
  readFile,
  readdir,
} from 'node:fs/promises';
import { readMarkdownWithFrontMatter } from '../shared.js';
import basic from './basic.js';

export default async function (config) {
  const path = 'content/blog/posts/';
  const scanResult = (await readdir(path, {
    recursive: true
  })).filter(s=>s.endsWith('index.md'));
  const blogListItems = (
    await Promise.all(scanResult.map(async item => {
      const {frontMatter} = await readMarkdownWithFrontMatter(path, item);
      const link = item.replace(/index\.md$/,'');
      return {link, frontMatter};
    }))
  )
    .sort((a, b) => b.frontMatter.date
      .localeCompare(a.frontMatter.date)
    )
    .map(({link, frontMatter}) => /*html*/`<article class="blog-post-link">
      <h3><a href="posts/${link}">${frontMatter.title}</a></h3>
      <p class="date">${frontMatter.date}</p>
      <p>${frontMatter.description || 'Click to read more'}</p>
    </article>`);
  console.log('blogListItems', blogListItems);
  return basic({
    ...config,
    content: /* html */`
    <div class="intro">${config.content}</div>
    <div class="blog-posts">
      ${blogListItems.join('\n')}
    </div>
`
  });
};
