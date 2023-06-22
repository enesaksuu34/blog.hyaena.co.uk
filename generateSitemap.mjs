import fs from 'fs';
import path from 'path';
import { getPosts } from './utils/mdx-utils.mjs';

function generateSitemap() {
  const posts = getPosts();
  const baseUrl = 'https://blog.hyaena.co.uk'; // Replace this with your base website URL

  const sitemapXML = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map((post) => {
          const slug = post.filePath.replace(/\.mdx?$/, '');
          const url = `${baseUrl}/posts/${slug}`;
          return `
          <url>
              <loc>${url}</loc>
          </url>
          `;
        })
        .join('\n')}
  </urlset>
  `;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXML);
}

generateSitemap();