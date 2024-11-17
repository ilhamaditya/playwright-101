const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./features/app1",  // Adjusted test directory
  timeout: 30000,
  reporter: [["list"], ["allure-playwright"]],  // Ensure Allure reporter is enabled
  use: {
    trace: "on-first-retry",
    headless: process.env.headless === "true",
  },
});
