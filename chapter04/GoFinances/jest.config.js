module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node-modules', '/android', '/ios'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect', 'jest-styled-components'],
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx', '!src/**/*.spec.tsx'],
  coverageReporters: ['lcov'],
};
