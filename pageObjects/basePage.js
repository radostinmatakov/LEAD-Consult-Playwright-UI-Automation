class BasePage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('img.default-logo');
  }

  async navigate(path = '/') {
    await this.page.goto(path);
    await this.logo.waitFor({ state: 'visible' });
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async isVisible(selector) {
    return this.page.locator(selector).isVisible();
  }

  async containsText(selector, expected) {
    const text = await this.page.locator(selector).textContent();
    return text.toLowerCase().includes(expected.toLowerCase());
  }
}

module.exports = BasePage;