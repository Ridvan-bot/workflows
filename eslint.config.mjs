import globals from 'globals';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],  // Ensure this pattern matches your file extensions
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,  // Use the TypeScript parser for .ts and .tsx files
      parserOptions: {
        ecmaVersion: 'latest',  // Allows modern JavaScript features
        sourceType: 'module',  // Allows imports
        ecmaFeatures: {
          jsx: true,  // Enables JSX parsing for .tsx files
        },
      },
    },
    plugins: {
      react: pluginReact,  // React plugin for JSX linting
      '@typescript-eslint': tsPlugin,  // TypeScript plugin for linting TS code
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    },
  },
];
