const nextConfig = {
  reactStrictMode: true,
  webpack: async (config) => {
    const path = await import("path");
    config.resolve.alias["~"] = path.default.resolve(process.cwd());
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint hatalarını görmezden gel
  },
};

export default nextConfig;
