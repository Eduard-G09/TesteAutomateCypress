Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

describe('Test LinkedIn', () => {

  it('I can loggin', () => {
    cy.visit('https://linkedin.com');

    cy.get('.nav__button-secondary').click();
    cy.get('#username').type('edi_blaga9@yahoo.com');
    cy.get('#password').type('Deadbydaylight09!');
    cy.get('.btn__primary--large').click();
    cy.get('#ember83').should('exist');
  })

})