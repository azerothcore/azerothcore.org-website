const withCSS = require('@zeit/next-css');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

module.exports = {
  assetPrefix: !debug ? '/azerothcore.github.io/' : '',
};
