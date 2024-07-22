/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '56be-125-167-48-101.ngrok-free.app',
          pathname: '/uploads/foto/**',
        },
      ],
    },
  }

export default nextConfig;