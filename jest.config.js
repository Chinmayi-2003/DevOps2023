export default {
  transform: {},
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Add this line to mock CSS imports
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
