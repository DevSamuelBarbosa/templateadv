import type { NextConfig } from "next";
const ambiente = process.env.NEXT_PUBLIC_APP_ENVIRONMENT === 'production'

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    output: "export",
    images: {
        unoptimized: true, // Necessário para GitHub Pages
    },
    basePath: ambiente ? "/templateadv" : '',
    assetPrefix: ambiente ? "/templateadv" : '',
    trailingSlash: true,
};

export default nextConfig;
