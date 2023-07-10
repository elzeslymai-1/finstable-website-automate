const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  //mochawesome reporter
  reporter: 'cypress-mochawesome-reporter',

  chromeWebSecurity: true,
  taskTimeout: 60000,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    SKIP_METAMASK_SETUP: true,
    PRIVATE_KEY_WITH_FUNDS: '0x',
  },
  e2e: {
    testIsolation: false,
    watchForFileChanges: false,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // config.specPattern = [
      //   'cypress/e2e/Test Scope/**/**.cy.ts',
      // ]

      return require('./cypress/plugins/index.js')(on, config)
    },

    baseUrl: 'https://dev.transcrypt.finance/',
  },
})
