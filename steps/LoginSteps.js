const { When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../page/LoginPage");

let loginPage;

When("I Visit the OrangeHRM login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When("I enter username", async function () {
  await loginPage.enterUsername();
});

When("I enter password", async function () {
  await loginPage.enterPassword();
});

When("I click on login button", async function () {
  await loginPage.clickOnLoginButton();
});

Then("I verify dashboard URL", async function () {
  await loginPage.verifyDashboardURL();
});
