describe('Login Page', () => {
  it('should show login form', () => {
    cy.visit('http://localhost:51515/index.html');
    cy.get('#username').should('exist');
    cy.get('#password').should('exist');
  });
});

it('should redirect to dashboard on valid login', () => {
  cy.visit('http://localhost:51515/index.html');
  cy.get('#username').type('admin');
  cy.get('#password').type('1234');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard.html');
  cy.contains('Welcome to your dashboard');
});

it('should show error message for invalid login', () => {
  cy.visit('http://localhost:51515/index.html');
  cy.get('#username').type('wronguser');
  cy.get('#password').type('wrongpass');
  cy.get('button[type="submit"]').click();
  cy.get('#message').should('contain', 'Invalid credentials.');
});

it('should show success message on valid login', () => {
  cy.visit('http://localhost:51515/index.html');
  cy.get('#username').type('admin');
  cy.get('#password').type('1234');
  cy.get('button[type="submit"]').click();
  cy.get('#message').should('contain', 'Login successful!');
  cy.get('#message').should('have.class', 'success');
});
