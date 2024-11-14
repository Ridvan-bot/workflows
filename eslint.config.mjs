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
        ecmaFeatures: {
          jsx: true, // Enables JSX parsing
        },
      },
    },
    plugins: {
      react: pluginReact, // Use the plugin object here (flat config format)
    },
    rules: {
      'react/jsx-uses-react': 'error', // These rules will now apply
      'react/jsx-uses-vars': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginReact.configs.recommended,
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
];
