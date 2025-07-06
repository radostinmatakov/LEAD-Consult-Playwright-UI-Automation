const { test, expect } = require('@playwright/test');
const setupTestObjects = require('../utils/setup');

let pages, assertions;

test.describe('Contact Form + reCAPTCHA Validation', () => {
  test.beforeEach(async ({ page }) => {
    const setup = setupTestObjects(page);
    pages = setup.pages;
    assertions = setup.assertions;
  });

  test('Form submission fails without reCAPTCHA', async () => {
    await pages.contactUsPage.navigate('/contact-us/');
   
    await pages.contactUsPage.fillContactForm();
    await pages.contactUsPage.submitWithoutCaptcha();

    await assertions.contactUsAssert.shouldShowCaptchaError();
    await assertions.contactUsAssert.shouldShowRequiredFieldsError();
  });
});