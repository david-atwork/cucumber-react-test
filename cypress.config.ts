import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      const options = {
        typescript: require.resolve('typescript'),
      };
      on('file:preprocessor', cucumber(options));
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/**/*.feature",
    chromeWebSecurity: false,
    video: false,
  },
});
