/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s7d1.scene7.com",
      },
    ],
  },
};

export default nextConfig;
