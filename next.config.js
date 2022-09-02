/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  
  images: {
    domains: [
      'source.unsplash.com',
      'media.graphassets.com',
      'i.ibb.co'
    ],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}
