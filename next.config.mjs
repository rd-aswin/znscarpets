/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/znscarpets" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
