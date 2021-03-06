module.exports = {
  testMatch: ["<rootDir>/__tests__/**/*.[jt]s?(x)", "<rootDir>/**/*.(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/__tests__/(.+/)?data/", "/__tests__/(.+/)?utils/"],
  moduleNameMapper: {},
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/"],
};
