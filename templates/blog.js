import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<div>
    <h2>This is the BLOG page</h2>
</div>
<div>${config.content}</div>
`
  });
};
