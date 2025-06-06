module.exports = {
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "./reports/junit",
        outputName: "junit.xml",
      },
    ],
  ],
  testMatch: ["**/integration-test.js", "**/__tests__/**/*.test.js"],
};
