import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/dkwg/booth',
  assetPrefix: '/dkwg/booth',
  output: 'standalone',
  images: {
    domains: ['earthobservations.org'],
  },
};

export default nextConfig;
