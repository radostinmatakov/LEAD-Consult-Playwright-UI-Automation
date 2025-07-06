const { expect } = require('@playwright/test');

class AssertionsAboutUs {
  constructor(page) {
    this.page = page;
    this.subtitle = page.locator('div.heading_subtitle').nth(1);
    this.aboutUstitle = page.locator('h1.heading_title');
  }

  async shouldContainKeywords(keywords = ['team', 'consulting']) {
    await this.subtitle.waitFor({ state: 'visible' });
    const content = await this.subtitle.textContent();
    if (!content) return false;
    const lower = content.toLowerCase();
    return keywords.some(k => lower.includes(k));
  }

  async shouldBeOnAboutPage() {
    await expect(this.page).toHaveURL(/.*\/about-us\/?/);
    await expect(this.aboutUstitle).toBeVisible();
    await expect(this.aboutUstitle).toHaveText(/about us/i);
  }
}

module.exports = AssertionsAboutUs;

