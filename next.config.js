/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path.html',
  //       destination: '/:path',
  //     },
  //   ]
  // },
  images: { unoptimized: true },
  output: 'export',
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig;
