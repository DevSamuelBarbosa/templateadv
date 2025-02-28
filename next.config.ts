import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: "export",
    images: {
        unoptimized: true, // Necessário para GitHub Pages
    },
    basePath: "/templateadv",
    assetPrefix: "/templateadv",
};

export default nextConfig;
