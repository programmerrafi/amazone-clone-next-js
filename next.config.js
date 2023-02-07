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
    ],
  },
};

module.exports = nextConfig;
