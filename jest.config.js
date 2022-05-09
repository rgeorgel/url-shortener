module.exports = {
  roots: ['<rootDir>'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '!**/__tests__/helper/*'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: '@shelf/jest-mongodb',
  moduleNameMapper: {
    '@base/(.*)': '<rootDir>/$1',
    '@app/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/__tests__/$1',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/application/**/*.+(ts|tsx|js)',
    '<rootDir>/src/adapters/**/*.+(ts|tsx|js)',
    '<rootDir>/src/infrastructure/database/**/*.+(ts|tsx|js)',
    '!<rootDir>/src/infrastructure/database/index.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/__tests__/helper/setupTests.ts'],
};
