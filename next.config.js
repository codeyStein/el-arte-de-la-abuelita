/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.fsal1-1.fna.fbcdn.net',
            },
        ],
    },
}


module.exports = nextConfig
