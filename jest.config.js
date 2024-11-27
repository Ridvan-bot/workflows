module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // jsdom is required for React tests
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest', // Tells Jest to use babel-jest for TypeScript and JavaScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
};