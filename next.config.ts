import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This project lives in a subdirectory alongside another app with its own
  // lockfile; pin the workspace root so tracing resolves correctly.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
