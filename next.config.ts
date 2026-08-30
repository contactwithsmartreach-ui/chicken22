import type { NextConfig } from "next";

// Determine if we are building for GitHub Pages production
const isProd = process.env.NODE_ENV === "production";
// Replace 'YOUR_REPO_NAME' with your actual GitHub repository name if it's not a user/organization page (e.g. username.github.io)
const repoName = ""; 

const nextConfig: NextConfig = {
  output: "export",
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