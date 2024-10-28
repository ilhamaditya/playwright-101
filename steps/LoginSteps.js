// steps/LoginSteps.js
const { When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../page/LoginPage");
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

let loginPage;

When("I Visit the OrangeHRM login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When("I enter username and password", async function () {
  await loginPage.login(process.env.WEB_USERNAME, process.env.WEB_PASSWORD);
});

Then("I verify dashboard URL", async function () {
  await loginPage.verifyDashboardURL();
});
