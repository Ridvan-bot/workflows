module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // jsdom is required for React tests
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Tells Jest to use ts-jest for TypeScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};