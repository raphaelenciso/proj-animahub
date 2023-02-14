/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s4.anilist.co", "artworks.thetvdb.com"],
  },
};

module.exports = nextConfig;
