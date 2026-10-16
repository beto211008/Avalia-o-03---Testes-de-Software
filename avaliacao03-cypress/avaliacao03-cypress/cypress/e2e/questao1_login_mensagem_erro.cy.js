/// <reference types="cypress" />

// Questão 1 - Usabilidade da mensagem de erro no login
// Site: https://the-internet.herokuapp.com/login

describe('Questão 1 - Mensagem de erro no login com campos em branco', () => {
  it('deve exibir "Your username is invalid!" e o balão com a classe CSS "error"', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').should('have.value', '');
    cy.get('#password').should('have.value', '');

    cy.get('button[type="submit"]').click(); // botão "Login"

    
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!');

    
    cy.get('div#flash').should('have.class', 'error');
  });
});
