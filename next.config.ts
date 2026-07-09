import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "c-6a4f8f81-14c2a3ca-d5633ccb66a9",
    "21.0.12.232",
    "localhost",
  ],
};

export default nextConfig;
