/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/vedant-deshpande-portfolio",
  assetPrefix: "/vedant-deshpande-portfolio/",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
