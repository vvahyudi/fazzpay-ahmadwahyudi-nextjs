/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placeimg.com",
                port: "",
                pathname: "/192/192/people"
            }
        ],
        domains: ["res.cloudinary.com"]
    },
    env: {
        URL_BACKEND: "https://fazzpay-rose.vercel.app",
        URL_CLOUDINARY: ""
    }
};

module.exports = nextConfig;
