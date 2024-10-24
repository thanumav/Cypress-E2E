const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/'
  },
  env: {
    url: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
