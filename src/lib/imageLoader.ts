import type { ImageLoaderProps } from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: ImageLoaderProps): string {
  // Avoid double-prefixing if src already starts with basePath
  if (src.startsWith(BASE_PATH)) return src;
  return `${BASE_PATH}${src}`;
}
