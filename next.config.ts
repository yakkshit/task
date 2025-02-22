import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ["fakestoreapi.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;
nextConfig.redirects = async () => [
  {
    source: '/cloating',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/carriers',
    destination: '/home',
    permanent: false,
  },
  // add additional redirects here if needed
];