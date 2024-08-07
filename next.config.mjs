/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.seg.plus',
      },
    ],
  },
};

export default nextConfig;
