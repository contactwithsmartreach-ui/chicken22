import type { NextConfig } from "next";

// Determine if we are building for GitHub Pages production
const isProd = process.env.NODE_ENV === "production";
// Repository name for GitHub Pages
const repoName = "chicken22"; 

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // If your site is hosted at username.github.io/repo-name/, set basePath and assetPrefix to '/repo-name'
  // If hosted at username.github.io or custom domain, leave as empty string ""
  basePath: isProd && repoName ? `/${repoName}` : "",
  assetPrefix: isProd && repoName ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }
    return config;
  },
};

export default nextConfig;