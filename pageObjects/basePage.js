class BasePage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('img.default-logo');
  }

  async navigate(path = '/') {
    await this.page.goto(path);
    await this.logo.waitFor({ state: 'visible' });
  }
}

module.exports = BasePage;