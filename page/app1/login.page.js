const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '//input[@placeholder="Username"]';
    this.passwordInput = '//input[@placeholder="Password"]';
    this.loginButton = '//button[@type="submit"]';
  }

  async navigate() {
    await this.page.goto(process.env.WEB_URL);
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyDashboardURL() {
    await expect(this.page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }
}

module.exports = { LoginPage };
