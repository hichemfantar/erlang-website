import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = withNextra({
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
});

export default nextConfig
