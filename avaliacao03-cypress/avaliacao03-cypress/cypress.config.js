const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on) {
      // Permite imprimir mensagens no terminal (usado nas questões 4 e 5)
      on('task', {
        log(mensagem) {
          console.log(mensagem);
          return null;
        },
      });
    },
  },
});
