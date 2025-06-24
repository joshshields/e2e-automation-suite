describe('Login Page', () => {
  it('should show login form', () => {
    cy.visit('http://localhost:51515/site');
    cy.get('#username').should('exist');
    cy.get('#password').should('exist');
  });
});
