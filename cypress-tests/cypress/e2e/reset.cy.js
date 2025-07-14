describe('Password Reset', () => {
  it('should show reset form', () => {
    cy.visit('http://localhost:51515/reset.html');
    cy.get('#username').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Reset Password');
  });

  it('should show error for unknown user', () => {
    cy.visit('http://localhost:51515/reset.html');
    cy.get('#username').type('notregistered');
    cy.get('button[type="submit"]').click();
    cy.get('#message').should('contain', 'Username not found.');
  });

  it('should reset password for registered user', () => {
    // Register user first
    cy.visit('http://localhost:51515/register.html');
    cy.get('#username').type('resetuser');
    cy.get('#password').type('pass123');
    cy.get('button[type="submit"]').click();

    // Then reset
    cy.visit('http://localhost:51515/reset.html');
    cy.get('#username').type('resetuser');
    cy.get('button[type="submit"]').click();
    cy.get('#message').should('contain', 'Password reset successful!');
  });
});
