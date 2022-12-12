import { users } from '../fixtures/userData.json'

describe('Registration', () => {

  //Open a website before the test suite start running
  before(() => {
    cy.visit('/')
  })
  
  //Logout after the test suite passed
  after(() => {
    cy.contains('Logout').click()
  })

  //Verify new client registration and creation of a new company
  it('Register a new Client and create a new Company', () => {
    cy.register(users.client)
    cy.login(users.admin)

    //Check if the new Company/Tenant has been created and is present in a Tenants grid
    cy.contains('Tenants').click({force: true})
    cy.url().should('include', '/tenants')
    
    cy.get('table')
    .contains('td', users.client.tenantName)
      .parent('tr')
        .within(() => {
          cy.get('td').eq(1).contains(users.client.tenantDescription)
        })


    //Check if the new client has been created and is present in a Users grid
    cy.contains('Users').click({force: true})
    cy.url().should('include', '/users')

    cy.get('table')
      .contains('td', users.client.firstName)
        .parent('tr')
          .within(() => {
            cy.get('td').eq(1).contains(users.client.lastName)
            cy.get('td').eq(2).contains('td', users.client.email)
            cy.get('td').eq(4).contains('td', 'Client')
            cy.get('td').eq(5).contains('td', 'Disabled')
            cy.get('td').eq(8).contains('a', 'Enable')
          })

    // Enable the client
    cy.get('table')
    .contains('td', users.client.firstName)
      .parent('tr')
        .within(() => {
          cy.get('td').eq(8).contains('Enable').click()
          cy.get('td').eq(5).contains('td', 'Enabled')
        })
        
    // Delete the Company/Tenant
    cy.contains('Tenants').click({force: true})
    cy.url().should('include', '/tenants')
    
    cy.get('table')
    .contains('td', users.client.tenantName)
      .parent('tr')
        .within(() => {
          cy.get('td').eq(4).contains('Delete').click()
        })

  })

})
