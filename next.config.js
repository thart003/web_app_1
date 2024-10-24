/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    },
    // Add this to help with hydration warnings
    swcMinify: true,
    compiler: {
      // Enables the styled-components plugin
      styledComponents: true,
    },
  };
  
  module.exports = nextConfig;