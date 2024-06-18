/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/testnextjs",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
