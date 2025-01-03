import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<h2>Blog</h2>
<div>${config.content}</div>
`
  });
};
