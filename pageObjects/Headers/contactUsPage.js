const BasePage = require('../basePage');

class ContactPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.nameField = page.locator('(//input[@name="your-name"])[1]');
    this.emailField = page.locator('input[name="your-email"]');
    this.messageField = page.locator('textarea[name="your-message"]');
    this.consentCheckbox = page.locator('(//input[@name="accept-terms[]"])[1]');
    this.sendButton = page.locator('(//input[@type="submit"])[1]');
  }

  async fillContactForm() {
    await this.nameField.type('R.Matakov', { delay: 300 });
    await this.emailField.type('radostin@example.com', { delay: 50 });
    await this.messageField.type('Test Message!', { delay: 50 });
    await this.consentCheckbox.click();
  }

  async submitWithoutCaptcha() {
    await this.sendButton.click();
  }
}

module.exports = ContactPage;

