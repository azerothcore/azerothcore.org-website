const prod =
  process.env.NODE_ENV === 'production' && process.env.ANALYZE !== 'true';

module.exports = {
  'process.env.BACKEND_URL': prod ? '' : '',
};
