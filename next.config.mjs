/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'logos-world.net',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
