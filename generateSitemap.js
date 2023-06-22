// generateSitemap.js

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// List your site's pages here
const pages = [
  { url: '/', priority: 1 },
  { url: '/posts/', priority: 0.7 },
  // Add more pages as needed
];

(async () => {
  const stream = new SitemapStream({ hostname: 'https://blog.hyaena.co.uk' });
  const xmlString = await streamToPromise(
    Readable.from(pages).pipe(stream)
  ).then((data) => data.toString());

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), xmlString);
})();