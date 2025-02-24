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
  // Redirects to /products
  {
    source: '/shop',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/clothing',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/shoes',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/accessories',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/brands',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/sale',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/gift-cards',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/buy-gift-cards',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/redeem-a-gift-card',
    destination: '/products',
    permanent: false,
  },
  {
    source: '/corporate-gift-cards',
    destination: '/products',
    permanent: false,
  },
  // Redirects to /home
  {
    source: '/about-gift-cards',
    destination: '/home',
    permanent: false,
  },
  {
    source: '/subscribe',
    destination: '/home',
    permanent: false,
  },
  {
    source: '/about-store',
    destination: '/home',
    permanent: false,
  },
  {
    source: '/about-us',
    destination: '/home',
    permanent: false,
  },
  {
    source: '/careers',
    destination: '/home',
    permanent: false,
  },
  {
    source: '/support',
    destination: '/home',
    permanent: false,
  },
  {
    source: '/newsroom',
    destination: '/home',
    permanent: false,
  },
  {
    source: '/investors',
    destination: '/home',
    permanent: false,
  },
];