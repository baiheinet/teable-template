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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin', 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
