import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Nereaperfumery",
  assetPrefix: "/Nereaperfumery/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Nereaperfumery",
  },
};

export default nextConfig;
