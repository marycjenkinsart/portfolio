import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<h2>Process</h2>
<div style="margin: auto; max-width: 600px;">
  <div
    class="process-sequence"
    style="padding-bottom: calc(5/4 * 100%);"
  >
    <div class="aspect-container">
      <div class="sequence" >
        <div class="image-container"><img src="media/kestrel-comfort/day01.jpg"/></div>
        <div class="image-container"><img src="media/kestrel-comfort/day02.jpg"/></div>
        <div class="image-container"><img src="media/kestrel-comfort/day03.jpg"/></div>
        <div class="image-container"><img src="media/kestrel-comfort/day04.jpg"/></div>
        <div class="image-container"><img src="media/kestrel-comfort/day05.jpg"/></div>
        <div class="image-container"><img src="media/kestrel-comfort/day06.jpg"/></div>
        <div class="image-container incoming"><img src="media/kestrel-comfort/day07_FINAL.jpg"/></div>
      </div>
      <div class="controls">
        <button class="left">&lt;</button>
        <button class="right">&gt;</button>
      </div>
      <div class="label">Final</div>
    </div>
  </div>
</div>
<div>${config.content}</div>
`
  });
};
