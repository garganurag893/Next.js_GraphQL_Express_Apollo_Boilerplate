module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'react-app',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {
        "@typescript-eslint/explicit-function-return-type":0,
        "@typescript-eslint/no-explicit-any":0,
    },
  };