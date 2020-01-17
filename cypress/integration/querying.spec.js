/// <reference types="Cypress" />

context('Querying', () => {

  before(() => {
    cy.visit('http://localhost:8080')
  });

  it('assertions', () => {
    cy.get('.App-header').should('have.text', 'demo app');
  });

})
