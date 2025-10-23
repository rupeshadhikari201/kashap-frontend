import path from "node:path";
import { fileURLToPath } from "node:url";

// Define __dirname manually for ESM (since .mjs doesn't have it)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js")],
      },
    },
  },
};

export default nextConfig;
