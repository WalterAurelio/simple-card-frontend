describe('template spec', () => {
/*   it('passes', () => {
    cy.visit('https://example.cypress.io');
  }); */

  it('my first test', () => {
    cy.visit('http://localhost:5173');

    cy.get('[data-testid=paragraph-element').as('pElement');

    // cy.get('[data-testid=paragraph-element]').should('exist').should('have.text', 'Text: ');
    cy.get('@pElement').should('exist').should('have.text', 'Text: ');
    cy.get('h1').should('exist').should('have.text', 'Parent Component');

    cy.get('input').clear().type('Hola Mundo', { delay: 100 });
    cy.get('button').click();
    cy.get('@pElement').should('have.text', 'Text: Hola Mundo');
  });
});