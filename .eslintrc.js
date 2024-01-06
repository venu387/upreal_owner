module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommend',
    'plugin:prettier/recommend',
  ],
  overrides: [],
  parser: '@typescript-elint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/prop-types': ['off'],
    "indent": ["error", "tab"],
    'react/react-in-jsx-scope': 'off',
    "indent": ["error", 2],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
