Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

  describe('Practicing automatic testing ', () => {

    // it('Login test using wrong credentials', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_userSSS');
    //   cy.get('[data-test="password"]').type('1123');

    //   cy.get('[data-test="login-button"]').click();

    //   cy.get('[data-test="error"]').should('be.visible');
    // })

    // it('Login test using wrong credentials only for one field', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('1123');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="error"]').should('be.visible');

    //   cy.reload();
    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_users');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="error"]').should('be.visible');
    // })

    // it('Login test using correct credentials', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('.app_logo').should('be.visible');
    // })

    // it('Logout test', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('#react-burger-menu-btn').click();
    //   cy.get('[data-test="logout-sidebar-link"]').click();
    //   cy.get('[data-test="login-button"]').should('be.visible');
    // })

    //  it('Verifying if the lateral menu is working', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('#react-burger-menu-btn').click();
    //   cy.get('[data-test="inventory-sidebar-link"]').should('be.visible');
    //   cy.get('[data-test="about-sidebar-link"]').should('be.visible');
    //   cy.get('[data-test="logout-sidebar-link"]').should('be.visible');
    //   cy.get('[data-test="reset-sidebar-link"]').should('be.visible');
    //   cy.get('#react-burger-cross-btn').click();
    //   cy.get('#react-burger-menu-btn').should('be.visible');
      
    // })

    // it('Verifying "add to cart" functionality', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //   cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
    //   cy.get('[data-test="shopping-cart-link"]').click();
    //   cy.get('[data-test="inventory-item"]').should('be.visible');
    // })

    // it('Verifying "remove from cart" functionality', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //   cy.get('[data-test="shopping-cart-link"]').click();
    //   cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    //   cy.get('[data-test="inventory-item"]').should('not.exist');

    // })

    // it('Verifying e2e flow for buying a product', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    //   cy.get('[data-test="shopping-cart-link"]').click();
    //   cy.get('[data-test="checkout"]').click();
    //   cy.get('[data-test="firstName"]').type('Eduard');
    //   cy.get('[data-test="lastName"]').type('Blaga');
    //   cy.get('[data-test="postalCode"]').type('1111')
    //   cy.get('[data-test="continue"]').click();
    //   cy.get('.summary_info').should('be.visible');
    //   cy.get('[data-test="finish"]').click();
    //   cy.get('[data-test="checkout-complete-container"]').should('be.visible');
    // })

    // it('Verifying if you can access the description page for a product', () => {

    //   cy.visit('https://www.saucedemo.com/');
    //   cy.get('[data-test="username"]').type('standard_user');
    //   cy.get('[data-test="password"]').type('secret_sauce');
    //   cy.get('[data-test="login-button"]').click();
    //   cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').click();
    //   cy.get('.inventory_details_desc_container').should('be.visible');

    // })

    it('Verifying "back to products" button', () => {

      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').click();
      cy.get('[data-test="back-to-products"]').click();
      cy.get('[data-test="inventory-container"]').should('be.visible');

    })

  })