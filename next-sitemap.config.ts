import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://emoviral.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
  exclude: ['/admin/**', '/dashboard/**', '/api/**', '/thank-you'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/foto'),
    await config.transform(config, '/web'),
    await config.transform(config, '/socialmedia'),
    await config.transform(config, '/kampagnen'),
    await config.transform(config, '/beratung'),
    await config.transform(config, '/kontakt'),
    await config.transform(config, '/about'),
    await config.transform(config, '/karriere'),
    await config.transform(config, '/Impressum'),
    await config.transform(config, '/Datenschutz'),
    await config.transform(config, '/AGB'),
  ]
}

export default config
