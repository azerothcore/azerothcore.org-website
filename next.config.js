const withCSS = require('@zeit/next-css');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = {
  assetPrefix: process.env.BASE_PATH || '',
};
