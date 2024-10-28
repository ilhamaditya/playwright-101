const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features',  // Pastikan ini mengarah ke folder yang berisi file .feature
  timeout: 30000,
  reporter: [['allure-playwright']],
  use: {
    trace: 'on-first-retry',
  },
});
