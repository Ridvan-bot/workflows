import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest', // This ensures modern JavaScript parsing
        sourceType: 'module',  // Allows imports in JavaScript files
      },
    },
    rules: {
            // Disable React in-scope rule for React 17+
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.recommended,
];
