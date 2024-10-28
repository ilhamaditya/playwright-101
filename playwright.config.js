// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./features",
  timeout: 30000,
  reporter: [["list"], ["allure-playwright"]],
  use: {
    trace: "on-first-retry",
    headless: process.env.headless === "true",
  },
});
