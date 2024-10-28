// utility/TestHooks.js
const { BeforeAll, AfterAll, Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser;
let context;
let page;

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: process.env.headless === "true",
  });
});

Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // Associating `page` to the Cucumber `this`
});

After(async function () {
  await page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
