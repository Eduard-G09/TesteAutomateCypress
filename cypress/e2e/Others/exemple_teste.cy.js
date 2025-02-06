Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

describe('Exemplul in care', () => {

  // it('Verific daca un URL contine ceva', () => {
  //   cy.visit('https://idp.notino.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DWebClient%26redirect_uri%3Dhttp%253A%252F%252Fwww.notino.ro%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access%26code_challenge%3DAM94ICAx32KSAlxPV1VJDc4bCDfkZpivPkuhgkhVo_I%26code_challenge_method%3DS256%26nonce%3D638744457675870664.YTRmM2RhNjMtNWYzZC00MGY5LWE5OWUtYzBjZTRmZDMyOTllOTIxZGIzMjItZGM1My00NDA5LTk2ZGQtOGM0MmI3OWFiOWQz%26shopId%3Dnotino.ro%26USER%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaG9wIjoibm90aW5vLnJvIiwiY2dycCI6IjI2MyIsImxhbmciOiI4IiwibHRhZyI6InJvLVJPIiwiY3VyciI6IjgiLCJjbGllbnQiOiJ3ZWIiLCJncmQiOiIyMzEwODczODEzNDI1MTgyMyIsInNpZCI6IkM3RkYwMDAwLTYzMTgtMkEzRS0yRkIwLTA4REQxNzg1RDQ2OSIsInJvbGUiOiJBbm9ueW1vdXMiLCJjYXJ0IjoiQzdGRjAwMDAtNjMxOC0yQTNFLTJGRTAtMDhERDE3ODVENDY5IiwiaWF0IjoxNzM4ODQ4OTY3LCJpc3MiOiJub3Rpbm8ifQ.ob348dtmVPuCRcwV0FqeV_amxOChyTH7AqQVvN-8r5c%26state%3DCfDJ8NX87-xbYThJmcjKl3G3IAZIyxkaJWiIgPS9gn5wXacDrZ0geKmMaiVoXNBJB8J-P-0NQEmrBpAYX5ZK8vZz0jDMcYmo81Yd2g4XEkilFwKt9E4U29inW1KxU2YF7kuArt9b481KmgXLzxvWUY3Hubg9k6aP09ExsVrn74Ie8_hGUznRjPPN_wp3sL1kxjtRMs1VZDhJ9uXDVaOOatO1p8s29v8f5C5LiTkmXrBpXdqKxYCNYlKaPnxHIkMro6INI0w_cpl3HklFtGA7QVTX6885TXxrL53nIT5_Ne9BYa3i7utKGzCau_sjbwaIcvSwwnHS2_5q51_xUv_Xv5K9pyqVMKnQRGv5LKE9dF8wEOi2mQs4ZlV1tjn0eATN8f1Itg%26x-client-SKU%3DID_NET8_0%26x-client-ver%3D7.5.1.0');
  //   cy.url().should('include', '/login?'); //verifica un segment
  // })


  // it('Selectez folosind un atribut', () => {
  //   cy.visit('https://www.google.com');
  //   cy.get('#L2AGLb').click();
  //   cy.get('[alt="Google"]').should('be.visible'); //Selector atribut + assertion cu visible
  // })


  // it('Fac un screenshot la pagina', () => {
  //   cy.visit('https://www.google.com');
    
  //   cy.screenshot(); // Face screenshot intr-un folder default
  // })

  // it('Verific o valoare din input', () => {
  //   cy.visit('https://www.youtube.com');
  //   cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();

  //   cy.wait(3000);
    
  //   cy.get('.ytSearchboxComponentInput').type('music');
    
  //   cy.get('.ytSearchboxComponentInput').should('have.value', 'music');  //Assertion contine textul
  // })

  //  it('Verific o valoare din input', () => {
  //    cy.visit('https://www.libris.ro/');
    
  //    cy.get('autoCompleteButton').should('have.class', 'onSearchClick'); // Exista clasa pe buton?
  //  })

  // it('Asteapta 5 secunde', () => {
  //   cy.visit('https://www.google.com');
  //   cy.get('#L2AGLb').click();

  //   cy.wait(5000);
    
  //   cy.get('.gLFyf').type('au trecut 5 secunde'); 
  // })

})