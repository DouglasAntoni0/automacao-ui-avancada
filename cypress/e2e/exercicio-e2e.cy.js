/// <reference types="cypress" />

describe('Exercício: Teste de ponta a ponta na EBAC Shop', () => {

    beforeEach(() => {
        cy.visit('/produtos/');
        cy.fixture('dados_checkout.json').as('dados');
    });

    it('Deve fazer um pedido com 4 produtos diferentes de ponta a ponta', () => {
        
        // --- ETAPA 1: Adicionar 4 produtos diferentes ao carrinho ---
        cy.adicionarProduto('Aero Daily Fitness Tee', 'XL', 'Brown', 1);
        cy.adicionarProduto('Aether Gym Pant', '36', 'Brown', 1);
        cy.adicionarProduto('Ajax Full-Zip Sweatshirt', 'XL', 'Blue', 1);
        cy.adicionarProduto('Arcadio Gym Short', '34', 'Blue', 1);

        // --- ETAPA 2: Prosseguir para o checkout ---
        cy.get('.woocommerce-message .button').click();
        cy.get('.checkout-button').click();

        // --- ETAPA 3: Preencher os detalhes de faturamento ---
        cy.get('@dados').then(dados => {
            cy.get('#billing_first_name').clear().type(dados.nome);
            cy.get('#billing_last_name').clear().type(dados.sobrenome);
            cy.get('#billing_address_1').clear().type(dados.endereco);
            cy.get('#billing_city').clear().type(dados.cidade);
            cy.get('#billing_postcode').clear().type(dados.cep);
            cy.get('#billing_phone').clear().type(dados.telefone);
            cy.get('#billing_email').clear().type(dados.email);
            cy.get('#order_comments').clear().type(dados.comentario);
        });

        // --- ETAPA 4: Selecionar o método de pagamento e finalizar a compra ---
        cy.get('#payment_method_bacs').click();
        cy.get('#terms').click();
        cy.get('#place_order').click();

        // --- ETAPA 5: Verificação Final 
        cy.get('.woocommerce-notice', { timeout: 10000 }).should('contain', 'Obrigado. Seu pedido foi recebido.');
    });
});