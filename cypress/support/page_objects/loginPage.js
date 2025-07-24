class LoginPage {
  visit() {
    cy.visit('https://one.fracttal.com');
    cy.wait(20000);
  }

  enterEmail(email) {
    cy.get('[data-cy="email-input"]').should('be.visible').type(email);
  }

  enterPassword(password) {
    cy.get('[data-cy="pwd-input"]').should('be.visible').type(password);
  }

  clickLogin() {
    cy.get('[data-cy="next-button"]').click();
  }
}

export const loginPage = new LoginPage();
