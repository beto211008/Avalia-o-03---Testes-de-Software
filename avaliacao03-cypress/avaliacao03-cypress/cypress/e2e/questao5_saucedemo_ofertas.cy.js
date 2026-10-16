/// <reference types="cypress" />

// Questão 5 - Robô de ofertas: produtos com preço menor que $20.00
// Site: https://www.saucedemo.com/

describe('Questão 5 - Rastreio de ofertas abaixo de $20.00 (SauceDemo)', () => {
  it('deve listar nome e preço de todos os itens e exibir apenas os que custam menos de $20.00', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');

    cy.get('.inventory_item').should('have.length.greaterThan', 0);

    cy.get('.inventory_item').then(($itens) => {

      const produtos = [...$itens].map((item) => ({
        nome: item.querySelector('.inventory_item_name').innerText.trim(),
        preco: parseFloat(
          item.querySelector('.inventory_item_price').innerText.replace('$', '')
        ),
      }));

      cy.task('log', `Total de produtos mapeados: ${produtos.length}`);


      const ofertas = produtos.filter((p) => p.preco < 20.0);

      cy.task('log', '===== OFERTAS ABAIXO DE $20.00 =====');
      ofertas.forEach((p) => {
        cy.task('log', `${p.nome} - $${p.preco.toFixed(2)}`);
      });


      cy.writeFile('cypress/results/ofertas_abaixo_de_20.json', ofertas);


      expect(ofertas.length, 'quantidade de ofertas').to.be.greaterThan(0);
      ofertas.forEach((p) => expect(p.preco).to.be.lessThan(20));
    });
  });
});
