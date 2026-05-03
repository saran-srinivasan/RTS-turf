import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/RTS-turf',
  assetPrefix: '/RTS-turf/',
};

export default nextConfig;
