export default function (config) {
  const { title, content, basePath } = config;
  return /* html */ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mary C Jenkins Art</title>
    <link rel="stylesheet" href="${basePath}/styles.css">
  </head>
  <body>
    <div class="container">
      <h1>Mary C Jenkins Art</h1>
      <header>
        <nav>
          <ul>
            <li><a href="${basePath}/">Home</a></li>
            <li><a href="${basePath}/gallery/">Gallery</a></li>
            <li><a href="${basePath}/process/">Process</a></li>
            <li><a href="${basePath}/blog/">Blog</a></li>
          </ul>
        </nav>
      </header>
      ${content}
    </div>
    <script src="${basePath}/slider.js"></script>
  </body>
  </html>
  `.trim();
}
