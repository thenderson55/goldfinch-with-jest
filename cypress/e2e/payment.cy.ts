// const { v4: uuidv4 } = require('uuid');

describe('payment', () => {
  it('user can make a payment', async () => {
    // cy.mount()
    cy.visit('/');
    // login
    cy.findByRole('link', { name: /grid/i }).should('be.visible');

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="flex"]').click();

    // The new url should include "/about"
    cy.url().should('include', '/flex');

    // The new page should contain an h1 with "About page"
    cy.get('span').contains(/comrie royal hotel/i);
  });
});

export {};
