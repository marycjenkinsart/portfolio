import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<article>
  <div>&lt; <a href="../../">blog</a></div>
  <div><p class="date">${config.date}</p></div>
  <div><p>${config.content}</p></div>
</article>
`
  });
};
