import type { NextConfig } from "next";

// basePath only needed for GitHub Pages (repo subdirectory)
// On Vercel the app is served from root, so basePath must be empty
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/Nereaperfumery" : "",
  assetPrefix: isGithubPages ? "/Nereaperfumery/" : "",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/Nereaperfumery" : "",
  },
};

export default nextConfig;
