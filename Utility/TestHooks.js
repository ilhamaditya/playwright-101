const { BeforeAll, AfterAll, Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: process.env.headless === "true",
  });
});

Before(async function () {
  const context = await browser.newContext();
  this.page = await context.newPage(); // Attach `page` to the Cucumber `this`
  this.context = context; // Attach `context` if needed
});

After(async function () {
  await this.page.close();
  await this.context.close(); // Clean up context
});

AfterAll(async function () {
  await browser.close();
});
