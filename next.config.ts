import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export when NEXT_EXPORT is set (for Netlify builds)
  ...(process.env.NEXT_EXPORT === 'true' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  })
};

export default nextConfig;
