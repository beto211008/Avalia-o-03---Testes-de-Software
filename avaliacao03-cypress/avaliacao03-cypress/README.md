# Avaliação 03 - Testes de Software

**Aluno:** João Roberto Oliveira dos Santos
**Ferramenta:** Cypress (JavaScript)

## Estrutura

| Questão | Arquivo | Site |
|---|---|---|
| 1 | `cypress/e2e/questao1_login_mensagem_erro.cy.js` | the-internet.herokuapp.com/login |
| 2 | `cypress/e2e/questao2_loading_dinamico.cy.js` | the-internet.herokuapp.com/dynamic_loading/1 |
| 3 | `cypress/e2e/questao3_carrinho_e2e.cy.js` | saucedemo.com |
| 4 | `cypress/e2e/questao4_demoblaze_laptop_mais_caro.cy.js` | demoblaze.com |
| 5 | `cypress/e2e/questao5_saucedemo_ofertas.cy.js` | saucedemo.com |

## Como executar

Pré-requisito: Node.js 18+.

```bash
npm install
npm run cy:run      # executa todos os testes em modo headless
npm run cy:open     # abre a interface gráfica do Cypress
```

Executar apenas uma questão:

```bash
npx cypress run --spec "cypress/e2e/questao1_login_mensagem_erro.cy.js"
```

A Questão 5 imprime as ofertas no terminal e salva o resultado em
`cypress/results/ofertas_abaixo_de_20.json`.
