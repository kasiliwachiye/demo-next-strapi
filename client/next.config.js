const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
