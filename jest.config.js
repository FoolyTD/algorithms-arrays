module.exports = {
  verbose: false,
  testEnvironment: "node",

  // Use our test reporter
  reporters: [
    [
      "jest-reporter",
      {
        skipFailSound: true,
        skipPassSound: true,
      },
    ],
  ],
};
