import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<article>
  <div>&lt; <a href="../../">gallery</a></div>
  <div><h1 class="title">${config.title}</h1></div>
  <div><p class="date">${config.date}</p></div>
  <div><p class="medium">Medium: ${config.medium || 'unknown'}</p></div>
  <div><p class="size">Size: ${config.size || 'unknown'}</p></div>
  <div><p>${config.content}</p></div>
</article>
`
  });
};
