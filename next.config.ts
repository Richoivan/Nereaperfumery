import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Nereaperfumery",
  assetPrefix: "/Nereaperfumery/",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Nereaperfumery",
  },
};

export default nextConfig;
