describe('Site Google.com', () => {

  //Testtul nr 1
  it('functioneaza cu o cautare basic, dar cu o eraore de sintaxa', () => {
    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();
    cy.get('.gLFyf').type('vlog de it').type('{enter}');
  })


})