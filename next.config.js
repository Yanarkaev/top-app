/** @type {import('next').NextConfig} */

// const path = require("path");

const nextConfig = {
  sassOptions: {
    prependData: '@import "@/styles/main.scss";',
  },
};

module.exports = nextConfig;
