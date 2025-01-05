import {
  join,
} from 'node:path';
import {
  readdir,
  writeFile,
} from 'node:fs/promises';
import { readMarkdownWithFrontMatter } from '../shared.js';
import basic from './basic.js';
import { createCanvas, loadImage } from '@napi-rs/canvas';

export default async function (config) {
  const inputPath = 'content/gallery/works/';
  const outputPath = 'dist/gallery/works/';
  const thumbnailSize = 512;
  const width = thumbnailSize;
  const height = thumbnailSize;
  const scanResult = (await readdir(inputPath, {
    recursive: true
  })).filter(s=>s.endsWith('index.md'));
  const galleryItems = (
    await Promise.all(scanResult.map(async item => {
      const {frontMatter} = await readMarkdownWithFrontMatter(inputPath, item);

      const link = item.replace(/index\.md$/,'');
      const name = link.replace(/\\|\//g, '');
      const sourcePath = `${name}/${name}.jpg`;
      const canvas = createCanvas(width, height);
      const ctx = canvas.getContext('2d');
      const image = await loadImage(inputPath + sourcePath);
      const longerAxis = Math.max(image.width, image.height);
      if(longerAxis === image.width) {
        const ratio = image.width / image.height;
        const offset = (ratio * width - width) / 2
        ctx.drawImage(image, -offset, 0, ratio * width, height);
      } else {
        const ratio = image.height / image.width;
        const offset = (ratio * height - height) / 2;
        ctx.drawImage(image, 0, -offset, width, ratio * height);
      }
      const thumbnailData = await canvas.encode('jpeg', 80);
      const thumbnailPath = sourcePath.replace('.jpg', '_thumbnail.jpg');
      await writeFile(`${outputPath}/${thumbnailPath}`, thumbnailData);
      const thumbnail = `works/${thumbnailPath}`;
      return {thumbnail, link, frontMatter};
    }))
  )
    .sort((a, b) => b.frontMatter.date
      .localeCompare(a.frontMatter.date)
    )
    .map(({thumbnail, link, frontMatter}) => /*html*/`<article class="gallery-link">
      <div class="image">
        <a href="works/${link}">
          <img src="${thumbnail}" />
        </a>
      </div>
      <div class="card-body">
        <h3><a href="works/${link}">${frontMatter.title}</a></h3>
        <p>${frontMatter.size || 'Unknown size'}, ${frontMatter.medium || 'unknown medum'}</p>
      </div>
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
