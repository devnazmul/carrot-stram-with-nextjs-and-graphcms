/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.graphassets.com',
      'i.ibb.co'
    ],
  },
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
}
