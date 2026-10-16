/// <reference types="cypress" />

// Questão 4 - Inteligência de mercado: laptop mais caro do Demoblaze
// Site: https://www.demoblaze.com/

describe('Questão 4 - Laptop mais caro (Demoblaze)', () => {
  it('deve extrair nome e preço do laptop mais caro e validar que o preço é maior que $0', () => {

    cy.intercept('POST', '**/bycat').as('produtosPorCategoria');

    cy.visit('https://www.demoblaze.com/');


    cy.contains('#itemc', 'Laptops').click();
    cy.wait('@produtosPorCategoria');


    cy.get('#tbodyid .card').should('have.length.greaterThan', 0);

    cy.get('#tbodyid .card').then(($cards) => {
      let maisCaro = { nome: '', preco: 0 };

      $cards.each((_, card) => {
        const nome = card.querySelector('.card-title a').innerText.trim();

        const preco = parseFloat(
          card.querySelector('h5').innerText.replace(/[^0-9.]/g, '')
        );

        if (preco > maisCaro.preco) {
          maisCaro = { nome, preco };
        }
      });

      const resumo = `Laptop mais caro: ${maisCaro.nome} - $${maisCaro.preco}`;
      cy.log(resumo);
      cy.task('log', resumo);


      expect(maisCaro.nome, 'nome do laptop').to.not.be.empty;
      expect(maisCaro.preco, 'preço do laptop mais caro').to.be.greaterThan(0);
    });
  });
});
