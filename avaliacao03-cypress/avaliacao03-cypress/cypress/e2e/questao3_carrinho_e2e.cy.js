/// <reference types="cypress" />

// Questão 3 - E2E: login, adicionar 3 produtos, remover 1 e validar badge = 2
// Site: https://www.saucedemo.com/

describe('Questão 3 - Carrinho de compras (E2E)', () => {
  it('deve exibir o número 2 no ícone do carrinho após adicionar 3 e remover 1 produto', () => {

    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');


    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '3');


    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();


    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '2')
      .and('have.css', 'background-color', 'rgb(226, 35, 26)');
  });
});
