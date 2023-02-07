/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "dl.airtable.com",
      "v5.airtableusercontent.com",
      "images2.imgbox.com",
    ],
  },
};

module.exports = nextConfig;
