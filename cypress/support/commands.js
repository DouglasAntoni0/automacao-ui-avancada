
Cypress.Commands.add('adicionarProduto', (produto, tamanho, cor, quantidade) => {
    cy.visit('/produtos/');

    cy.get('.products > .row')
        .contains(produto)
        .click();

    cy.get('.button-variable-item-' + tamanho).click();
    cy.get('.button-variable-item-' + cor).click();
    cy.get('.input-text.qty').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();

    cy.get('.woocommerce-message').should('contain', produto);
});