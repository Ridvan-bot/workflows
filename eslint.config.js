module.exports = {
    extends: 'standard',
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double']
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
        }
      }
    ]
  };
  