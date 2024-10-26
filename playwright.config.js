// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // folder di mana file tes Anda disimpan
  retries: 1,          // bisa diatur jika tes gagal untuk diulang
  reporter: [['list'], ['html']], // bisa menggunakan laporan HTML atau lainnya
  use: {
    headless: true,    // menjalankan browser dalam mode headless
  },
});
