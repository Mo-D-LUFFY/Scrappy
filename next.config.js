/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      domains : ['m.media-amazon.com'],
    },
  };
  
  // module.exports = {
  //   images: {
  //     formats: ['image/avif', 'image/webp'],
  //     remotePatterns: [
  //       {
  //         protocol: 'https',
  //         hostname: 'assets.vercel.com',
  //         port: '',
  //         pathname: '/image/upload/**',
  //       },
  //     ],
  //   },
  // }