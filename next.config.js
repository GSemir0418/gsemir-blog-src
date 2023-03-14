/** @type {import('next').NextConfig} */
const nextConfig = {
  // resolve bug during exporting
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  // CORS
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  transpilePackages: ['react-syntax-highlighter'],
};

module.exports = nextConfig;
