import basic from './basic.js';

export default function (config) {
  return basic({
    ...config,
    content: /* html */`
<h2>Home</h2>
<div
  class="hero-image"
  style="padding-bottom: calc(2/3 * 100%);"
>
  <div class="aspect-container">
    <div class="slider">
      <div class="image-container"><img src="media/banner-red-necked-grebe.jpg"/></div>
      <div class="image-container"><img src="media/banner-hummingbird-gladiolus.jpg"/></div>
      <div class="image-container"><img src="media/banner-hyacinth-macaw.jpg"/></div>
      <div class="image-container"><img src="media/banner-free-ride-ii.jpg"/></div>
    </div>
    <div class="controls">
      <button class="left">&lt;</button>
      <button class="right">&gt;</button>
    </div>
  </div>
</div>
<div
  class="hero-image"
  style="padding-bottom: calc(1/2 * 100%);"
>
  <div class="aspect-container">
    <div class="slider">
      <div class="image-container"><img src="media/banner-redpoll.jpg"/></div>
      <div class="image-container"><img src="media/banner-lazuli-quick.jpg"/></div>
      <div class="image-container"><img src="media/banner-kingfisher.jpg"/></div>
    </div>
    <div class="controls">
      <button class="left">&lt;</button>
      <button class="right">&gt;</button>
    </div>
  </div>
</div>

<div>${config.content}</div>
`
  });
};
