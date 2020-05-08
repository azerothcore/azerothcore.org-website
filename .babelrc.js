
const env = require('./env-config')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['transform-define', env],
    ['module-resolver', {
    'alias': {
      '@': './',
      '@/*': './*'
    }
    }]
  ],
}