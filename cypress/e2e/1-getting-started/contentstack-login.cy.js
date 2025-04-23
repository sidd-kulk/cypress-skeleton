/// <reference types="cypress" />


describe('Contentstack Login Page', () => {
  const URL = 'https://app.contentstack.com/#!/login'
  beforeEach(() => {
    cy.visit(URL)
  })

  it('checks if the login page has loaded correctly', () => {
    cy.get('#root').should('exist')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
    cy.contains('Log in to Contentstack').should('exist')
  })
})
