/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '9ec6-110-137-143-218.ngrok-free.app',
          port: '',
          pathname: '/uploads/foto/**',
        },
      ],
    },
  }

export default nextConfig;
