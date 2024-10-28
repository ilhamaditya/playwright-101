const { BeforeAll, AfterAll, Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: process.env.HEADLESS === "true",
  });
});

Before(async function () {
  this.context = await global.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await global.browser.close();
});
