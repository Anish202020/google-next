/** @type {import('next').NextConfig} */
const nextConfig = {
    // images:{
    //     domains:['image.tmdb.org']
    // }
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'logos-world.net',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;