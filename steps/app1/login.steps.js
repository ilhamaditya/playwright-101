const { When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../../page/app1/Login.page"); // Adjusted path
const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../../.env"),
});

When("I Visit the OrangeHRM login page", async function () {
  const loginPage = new LoginPage(this.page); // Instantiate with the correct `page`
  await loginPage.navigate();
});

When("I enter username and password", async function () {
  const loginPage = new LoginPage(this.page); // Instantiate again if needed
  await loginPage.login(process.env.WEB_USERNAME, process.env.WEB_PASSWORD);
});

Then("I verify dashboard URL", async function () {
  const loginPage = new LoginPage(this.page); // Instantiate again if needed
  await loginPage.verifyDashboardURL();
});
