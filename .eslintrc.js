module.exports = {
  env: {
    // supporting all kind of environment 
    // to build universal lib
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: ['json', 'import', 'jsdoc', 'jest', '@typescript-eslint'],
  extends: [
    'eslint:recommended', // basic eslint rules
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    'google', // google style guide
    'plugin:jest/recommended', // jest support
    'plugin:jest/style', // style for jest files
    'plugin:jsdoc/recommended', // jsdoc rules to document code 
    "prettier/react"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: ['/*', '!src'],
  rules: {
    'require-jsdoc': 0, // jsdoc is not mandatory on functions
    // disable eslint jsdoc internal check, already done by "jsdoc" plugin
    'valid-jsdoc': 0,
    'max-len': 0, // disable max length check of code lines
  },
  settings: {
    jsdoc: {
      preferredTypes: {
        object: 'Object',
      },
    },
  },
};
