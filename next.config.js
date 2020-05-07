const withCSS = require('@zeit/next-css');

const debug =
  process.env.NODE_ENV !== 'production' || process.env.ANALYZE === 'true';

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
  experimental: {
    jsconfigPaths: true,
  },
};

module.exports = {
  assetPrefix: !debug ? '/acore-pwa/' : '',
};
