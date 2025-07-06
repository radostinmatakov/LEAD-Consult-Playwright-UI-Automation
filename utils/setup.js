const HomePage = require('../pageObjects/Headers/homePage');
const AboutPage = require('../pageObjects/Headers/aboutUsPage');
const ContactPage = require('../pageObjects/Headers/contactUsPage');

const HomeAssertions = require('../assertions/assertionsHome');
const AboutAssertions = require('../assertions/assertionsAboutUs');
const ContactAssertions = require('../assertions/assertionsContactUs');

function setupTestObjects(page) {
  return {
    pages: {
      homePage: new HomePage(page),
      aboutUsPage: new AboutPage(page),
      contactUsPage: new ContactPage(page),
    },
    assertions: {
      homeAssert: new HomeAssertions(page),
      aboutUsAssert: new AboutAssertions(page),
      contactUsAssert: new ContactAssertions(page),
    },
  };
}

module.exports = setupTestObjects;