module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'consistent-return': 0,
    'no-multi-assign': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-shadow': 0,
    'func-names': 0,
  },
};
