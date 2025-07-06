const { test, expect } = require('@playwright/test');
const setupTestObjects = require('../utils/setup');

let pages, assertions;

test.describe('Navigation and Content Tests', () => {
  test.beforeEach(async ({ page }) => {
    const setup = setupTestObjects(page);
    pages = setup.pages;
    assertions = setup.assertions;
  });

  test('Header buttons navigate to correct sections.', async () => {
    await pages.homePage.navigate();
    await assertions.homeAssert.validateHeaderLinks();
    await pages.homePage.goToAboutUs();
    await assertions.aboutUsAssert.shouldBeOnAboutPage();
    await pages.homePage.goToContactUs();
    await assertions.contactUsAssert.shouldBeOnContactPage();
  });

  test('About Us page contains expected keywords.', async () => {
    await pages.aboutUsPage.navigate('/about-us/');
    await assertions.aboutUsAssert.shouldContainKeywords();
  });

  test('Contact page has required elements', async () => {
    await pages.contactUsPage.navigate('/contact-us/');
    await assertions.contactUsAssert.shouldHaveAnyContactElement();
  });
  
});
