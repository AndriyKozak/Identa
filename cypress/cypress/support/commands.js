// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a Login command --
Cypress.Commands.add('login', (user) => {
        cy.visit('/login')
        cy.get('#login-username').type(user.email)
        cy.get('#login-password').type(user.password)
        cy.get('#login').click()
        cy.url().should('include', '/dashboard')
})
//
//-- This is a Register command --
Cypress.Commands.add('register', (user) => {
        cy.visit('/register')
        cy.get('#firstName').type(user.firstName)
        cy.get('#lastName').type(user.lastName)
        cy.get('#tenantOrCompanyName').click({force: true}).type(user.tenantName)
        cy.get('#tenantOrCompanyDescription').click({force: true}).type(user.tenantDescription)
        cy.get('#register-email').type(user.email)
        cy.get('#password').type(user.password)
        cy.get('#confirmPassword').type(user.password)
        cy.get('#register-agree').check({force: true})
        cy.get('#register').click()
        cy.url().should('include', '/login')
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })