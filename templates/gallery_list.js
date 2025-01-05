import {
  readFile,
  readdir,
} from 'node:fs/promises';
import { readMarkdownWithFrontMatter } from '../shared.js';
import basic from './basic.js';

export default async function (config) {
  const path = 'content/gallery/works/';
  const scanResult = (await readdir(path, {
    recursive: true
  })).filter(s=>s.endsWith('index.md'));
  const galleryItems = (
    await Promise.all(scanResult.map(async item => {
      const {frontMatter} = await readMarkdownWithFrontMatter(path, item);
      const link = item.replace(/index\.md$/,'');
      return {link, frontMatter};
    }))
  )
    .sort((a, b) => b.frontMatter.date
      .localeCompare(a.frontMatter.date)
    )
    .map(({link, frontMatter}) => /*html*/`<article class="works-link">
      <h3><a href="works/${link}">${frontMatter.title}</a></h3>
      <p class="date">${frontMatter.date}</p>
      <p class="medium">Medium: ${frontMatter.medium || 'unlisted'}</p>
      <p class="size">Size: ${frontMatter.size || 'unlisted'}</p>
    </article>`);
  return basic({
    ...config,
    content: /* html */`
    <div class="intro">${config.content}</div>
    <div class="gallery-works">
      ${galleryItems.join('\n')}
    </div>
`
  });
};
