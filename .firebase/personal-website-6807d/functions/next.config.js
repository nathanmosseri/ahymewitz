"use strict";

// next.config.js
var nextConfig = {
  distDir: "build",
  webpack: (config) => {
    const oneOfRule = config.module.rules.find((rule) => rule.oneOf);
    const tsRules = oneOfRule.oneOf.filter((rule) => rule.test && rule.test.toString().includes("tsx|ts"));
    tsRules.forEach((rule) => {
      rule.include = void 0;
    });
    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ["tsx", "mdx", "ts"],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  svgo: {
    multipass: true,
    plugins: ["removeDimensions"]
  },
  strictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"]
  }
};
module.exports = nextConfig;
