// Evita que erros JS das páginas de terceiros (não relacionados ao teste) derrubem os cenários.
Cypress.on('uncaught:exception', () => false);
