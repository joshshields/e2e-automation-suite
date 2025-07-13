describe('Auth Flow', () => {
  it('redirects unauthenticated access to login page', () => {
    cy.visit('http://localhost:51515/dashboard.html');
    cy.url().should('include', 'index.html');
  });

  it('clears session on logout and redirects', () => {
    // Login
    cy.visit('http://localhost:51515/index.html');
    cy.get('#username').type('admin');
    cy.get('#password').type('1234');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'dashboard.html');

    // Clear localStorage to simulate logout
    cy.window().then(win => {
      win.localStorage.clear();
    });

    // Attempt to access dashboard again (without setting login)
    cy.visit('http://localhost:51515/dashboard.html');
    cy.url().should('include', 'index.html');
  });
});
