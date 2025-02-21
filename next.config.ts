import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["fakestoreapi.com"],
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