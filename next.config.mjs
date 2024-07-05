/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '84b2-125-167-50-252.ngrok-free.app',
          port: '',
          pathname: '/uploads/foto/**',
        },
      ],
    },
  }

export default nextConfig;
