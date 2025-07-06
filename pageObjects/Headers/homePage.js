const BasePage = require('../basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.homeLink = page.locator('header nav >> text=Home');
    this.aboutUsLink = page.locator('header nav >> text=About Us');
    this.ourCompanyLink = page.locator("//li[@id='menu-item-7956']//a[normalize-space()='Our Company']");
    this.servicesLink = page.locator('header nav >> text=Services');
    this.contactUsLink = page.locator('header nav >> text=Contact Us');
  }

  async goToAboutUs() {
    await this.aboutUsLink.waitFor({ state: 'visible' });
    await this.aboutUsLink.hover();
    await this.ourCompanyLink.waitFor({ state: 'visible' });
    await this.ourCompanyLink.click();
  }

  async goToContactUs() {
    await this.contactUsLink.waitFor({ state: 'visible' });
    await this.contactUsLink.click();
  }
}

module.exports = HomePage;