/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), { bufferutil: "bufferutil", "utf-8-validate": "utf-8-validate" }];
    return config;
  },
  transpilePackages: ["@clerk/nextjs"],
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig; 