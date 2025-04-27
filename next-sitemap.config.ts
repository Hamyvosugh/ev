import type { IConfig } from 'next-sitemap';
import fs from 'fs';
import path from 'path';

const config: IConfig = {
  siteUrl: 'https://emoviral.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
  exclude: ['/admin/**', '/dashboard/**', '/api/**', '/thank-you'],
  additionalPaths: async (config) => {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const files = fs.readdirSync(blogDir);

    const blogUrls = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, '');
        return config.transform(config, `/blog/${slug}`);
      });

    return Promise.all([
      config.transform(config, '/'),
      config.transform(config, '/foto'),
      config.transform(config, '/web'),
      config.transform(config, '/socialmedia'),
      config.transform(config, '/kampagnen'),
      config.transform(config, '/beratung'),
      config.transform(config, '/kontakt'),
      config.transform(config, '/about'),
      config.transform(config, '/karriere'),
      config.transform(config, '/Impressum'),
      config.transform(config, '/Datenschutz'),
      config.transform(config, '/AGB'),
      config.transform(config, '/blog'),
      ...blogUrls
    ]);
  }
}

export default config;