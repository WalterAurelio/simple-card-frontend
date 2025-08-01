describe('template spec', () => {
  it('my first test', () => {
    cy.visit('http://localhost:5173');

    cy.get('h1').should('exist').should('have.text', 'Parent Component');
    
    cy.get('[data-testid=paragraph-element]').as('pElement');
    cy.get('@pElement').should('exist').should('have.text', 'Text: ');

    cy.get('input').clear().type('Aurelio Gareca', { delay: 200 });
    cy.get('[data-testid=boton-child]').click();
    cy.get('@pElement').should('have.text', 'Text: Aurelio Gareca');

    cy.get('[data-testid=mi-boton]').as('miBoton');
    cy.get('@miBoton').should('exist').should('have.class', 'text-4xl').click();
    cy.get('@miBoton').should('have.class', 'bg-red-400').and('have.class', 'text-blue-500');
  });
});

/* describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io');
  // });

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
}); */