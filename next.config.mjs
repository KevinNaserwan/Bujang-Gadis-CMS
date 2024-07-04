/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '9344-125-167-50-173.ngrok-free.app',
          port: '',
          pathname: '/uploads/foto/**',
        },
      ],
    },
  }

export default nextConfig;
