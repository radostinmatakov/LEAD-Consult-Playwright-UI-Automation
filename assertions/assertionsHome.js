class AssertionsHome {
  constructor(page) {
    this.page = page;
    this.headerLinks = [
      page.locator('header nav >> text=Home'),
      page.locator('header nav >> text=About Us'),
      page.locator('header nav >> text=Services'),
      page.locator('header nav >> text=Contact Us'),
    ];
  }

  async validateHeaderLinks() {
    for (const link of this.headerLinks) {
      await link.waitFor({ state: 'visible' });
    }
  }
}

module.exports = AssertionsHome;