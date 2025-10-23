import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
  },
  // Removed unnecessary tracing root
  // This line causes problems in Vercel:
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js')],
      },
    },
  },
};

export default nextConfig;
