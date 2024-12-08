// .esLintrc.js
module.exports = {
    root: true,
    extends: ['@thoughtbot/eslint-config/native', '@thoughtbot/eslint-config/typescript'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  };