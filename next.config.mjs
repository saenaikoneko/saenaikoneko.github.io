/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/koneko.github.io',
  assetPrefix: '/koneko.github.io/', 
  distDir: 'docs',
};

export default nextConfig;