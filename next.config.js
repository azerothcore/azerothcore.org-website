const withCSS = require('@zeit/next-css');
const fs = require('fs');
const path = require('path');
const { conf } = require('./conf')

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

try {
  fs.unlinkSync('./pages')
} catch (e) { }
fs.symlinkSync(`./src/themes/${conf.theme}`, './pages');

module.exports = {
  webpack: (config, options) => {
    config.resolve.symlinks = false;
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  assetPrefix: !debug ? '/acore-pwa/' : '',
  env: {
    'BACKEND_URL': !debug ? '/acore-pwa' : ''
  }
};