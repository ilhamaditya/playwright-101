const { expect } = require("@playwright/test");
require("dotenv").config();

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(process.env.WEB_URL);
  }

  async enterUsername() {
    await this.page
      .locator('//input[@placeholder="Username"]')
      .fill(process.env.WEB_USERNAME);
  }

  async enterPassword() {
    await this.page
      .locator('//input[@placeholder="Password"]')
      .fill(process.env.WEB_PASSWORD);
  }

  async clickOnLoginButton() {
    await this.page.locator('//button[@type="submit"]').click();
  }

  async verifyDashboardURL() {
    await expect(this.page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }
}

module.exports = { LoginPage };
