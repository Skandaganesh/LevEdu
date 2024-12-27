import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi|mkv)$/,
      type: 'asset/resource', // Use 'asset/resource' for newer Webpack versions
    });
    return config;
  },
};

export default nextConfig;
