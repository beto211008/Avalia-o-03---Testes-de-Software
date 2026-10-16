/// <reference types="cypress" />

// Questão 2 - Aguardar o loader desaparecer e validar o texto final
// Site: https://the-internet.herokuapp.com/dynamic_loading/1

describe('Questão 2 - Carregamento dinâmico (spinner/loader)', () => {
  it('deve aguardar o "Loading..." sumir e exibir "Hello World!"', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');

  
    cy.get('#finish').should('not.be.visible');

    cy.contains('button', 'Start').click();

  
    cy.get('#loading').should('be.visible').and('contain.text', 'Loading...');

   
    cy.get('#loading', { timeout: 20000 }).should('not.be.visible');

    
    cy.get('#finish', { timeout: 20000 })
      .should('be.visible')
      .find('h4')
      .should('have.text', 'Hello World!');
  });
});
