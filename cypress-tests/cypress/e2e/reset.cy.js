describe('Password Reset', () => {
  it('should show reset form', () => {
    cy.visit('http://localhost:51515/reset.html');
    cy.get('#username').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Reset Password');
  });

  it('should show error for unknown user', () => {
    cy.visit('http://localhost:51515/reset.html', {
      onBeforeLoad(win) {
        win.localStorage.setItem("users", JSON.stringify({ testuser: "testpass" }));
      },
    });
    cy.get('#username').type('nonexistent');
    cy.get('button[type="submit"]').click();
    cy.get('#message').should('be.visible');
    cy.get('#message', { timeout: 6000 }).should('contain', 'Username not found.');
  });

  it('should reset password for registered user', () => {
    cy.visit('http://localhost:51515/reset.html', {
      onBeforeLoad(win) {
        win.localStorage.setItem("users", JSON.stringify({ resetuser: "oldpass" }));
      },
    });
    cy.get('#username').type('resetuser');
    cy.get('button[type="submit"]').click();
    cy.get('#message').should('be.visible');
    cy.get('#message', { timeout: 6000 }).should('contain', 'Password reset successful!');
  });
});
