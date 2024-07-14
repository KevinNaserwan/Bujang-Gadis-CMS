/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '34a5-125-167-49-173.ngrok-free.app',
          port: '',
          pathname: '/uploads/foto/**',
        },
      ],
    },
  }

export default nextConfig;
