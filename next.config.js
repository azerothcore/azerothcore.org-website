const withCSS = require('@zeit/next-css');
const fs = require('fs');
const path = require('path');

const symLinkCb = e => {
  console.log(e);
};

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
  assetPrefix: !debug ? '/azerothcore.github.io/' : '',
};

fs.symlink('./src/pages', './pages', symLinkCb);

module.exports = {
  webpack: (config, options) => {
    config.resolve.symlinks = false;
    config.resolve.alias['~'] = path.resolve(__dirname);
    return config;
  },
};
