import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc', 'avatar.iran.liara.run'],
  },
};

export default withNextIntl(nextConfig);
