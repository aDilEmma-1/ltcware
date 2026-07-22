import type { NextConfig } from "next";

// When building for GitHub Pages the workflow sets GITHUB_PAGES=true. That turns
// on static export and serves the site from the /ltcware repo subpath. Local
// `npm run dev` / `npm run build` are unaffected (no basePath, normal Next app).
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  ...(isPages
    ? {
        output: "export" as const,
        basePath: "/ltcware",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
