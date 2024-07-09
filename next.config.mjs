/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'aec2-125-167-48-100.ngrok-free.app',
          port: '',
          pathname: '/uploads/foto/**',
        },
      ],
    },
  }

export default nextConfig;
