import { users } from '../fixtures/userData.json'

describe('Verify Login page', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  after(() => {
    cy.contains('Logout').click()
  })
  

  it('Verify UI controls on Login page', () => {
    cy.url().should('include', '/login')
    cy.contains('label', 'Username')
    cy.contains('label', 'Password')
    cy.contains('button', 'Login')
    cy.contains('a', 'Forgot Password?')
    cy.contains('a', 'Register')
  })

  it('Verify UI controls on Register page', () => {
    cy.get('a[href*="register"]').click()

    cy.url().should('include', '/register')
    cy.contains('Registration')
    cy.contains('label', 'First Name')
    cy.contains('label', 'Last Name')
    cy.contains('label', 'Company / Tenant Name')
    cy.contains('label', 'Company / Tenant Description')
    cy.contains('label', 'Email Address')
    cy.contains('label', 'Password')
    cy.contains('label', 'Confirm Password')
    cy.contains('label', 'I agree with the terms and policy')
    cy.contains('input', 'Register')
    cy.contains('Already have an account?')
    cy.contains('a', 'Login')
  })

  it('Login as Admin user', () => {
    cy.login(users.admin)
    cy.contains('Dashboard')
    cy.contains('Tenants')
    cy.contains('Restaurant')
    cy.contains('Menus')
    cy.contains('Users')
    cy.contains('Super Admin')
    cy.contains('Logout')
  })

  it('Verify UI controls on Tenants page', () => {
    cy.login(users.admin)
    cy.contains('Tenants').click({force: true})

    cy.url().should('include', '/tenants')
    cy.contains('Add Tenant')
    cy.get('table')
      .contains('tr', 'Tenant Name')
      .contains('tr', 'Tenant Description')
      .contains('tr', 'Last Updated By')
      .contains('tr', 'Last Updated Date')
      .contains('tr', 'Actions')
  })

  it('Verify UI controls on Add Tenants page', () => {
    cy.login(users.admin)
    cy.contains('Tenants').click({force: true})
    cy.contains('Add Tenant').click()

    cy.url().should('include', '/tenants/add')
    cy.contains('Tenant Form')
    cy.contains('a', 'Back')
    cy.contains('label', 'Tenant Name')
    cy.contains('label', 'Tenant Description')
    cy.contains('input', 'Save')
  })

  it('Verify UI controls on Restaurants page', () => {
    cy.login(users.admin)
    cy.contains('Restaurants').click({force: true})

    cy.url().should('include', '/restaurants')
    cy.contains('Add Restaurant')
    cy.get('table')
      .contains('tr', 'Restaurant Name')
      .contains('tr', 'Restaurant Alias Name')
      .contains('tr', 'Last Updated By')
      .contains('tr', 'Last Updated Date')
      .contains('tr', 'Actions')
  })

  it('Verify UI controls on Add Restaurants page', () => {
    cy.login(users.admin)
    cy.contains('Restaurants').click({force: true})
    cy.contains('Add Restaurant').click()

    cy.url().should('include', '/restaurants/add')
    cy.contains('Restaurant Form')
    cy.contains('a', 'Back')
    cy.get('select[name="tenantId"]').should('be.visible')
    cy.contains('label', 'Restaurant Name')
    cy.contains('label', 'Restaurant Alias Name')
    cy.contains('Restaurant Alias will be used as short url. http://178.128.192.92:9000//menu')
    cy.contains('input', 'Save')
  })

  it('Verify UI controls on Menus page', () => {
    cy.login(users.admin)
    cy.contains('Menus').click({force: true})

    cy.url().should('include', '/menus')
    cy.contains('Add Menu')
    cy.get('table')
      .contains('tr', 'Menu Name')
      .contains('tr', 'Menu Description')
      .contains('tr', 'Menu Category')
      .contains('tr', 'Status')
      .contains('tr', 'Last Updated By')
      .contains('tr', 'Last Updated Date')
      .contains('tr', 'Actions')
  })

  it('Verify UI controls on Add Menus page', () => {
    cy.login(users.admin)
    cy.contains('Menus').click({force: true})
    cy.contains('Add Menu').click()

    cy.url().should('include', '/menus/add')
    cy.contains('Menu Form')
    cy.contains('a', 'Back')
    cy.get('select[name="restaurantId"]').should('be.visible')
    cy.contains('label', 'Menu Name')
    cy.contains('label', 'Menu Description')
    cy.contains('label', 'Category Name')
    cy.get('div[class="form-group"]').find('div[class="toggle btn btn-danger off"]')
    cy.contains('input', 'Save')
  })

  it('Verify UI controls on Users page', () => {
    cy.login(users.admin)
    cy.contains('Users').click({force: true})

    cy.url().should('include', '/users')
    cy.contains('Add User')
    cy.get('table')
      .contains('tr', 'First Name')
      .contains('tr', 'Last Name')
      .contains('tr', 'Username')
      .contains('tr', 'Restaurant Name')
      .contains('tr', 'User Type')
      .contains('tr', 'Status')
      .contains('tr', 'Last Updated By')
      .contains('tr', 'Last Updated Date')
      .contains('tr', 'Actions')
  })

  it('Verify UI controls on Add Users page', () => {
    cy.login(users.admin)
    cy.contains('Users').click({force: true})
    cy.contains('Add User').click()

    cy.url().should('include', '/users/add')
    cy.contains('User Form')
    cy.contains('a', 'Back')
    cy.get('select[name="roleName"]').should('be.visible')
    cy.get('select[name="tenantId"]').should('be.visible')
    cy.get('select[name="restaurantId"]').should('be.visible')
    cy.contains('label', 'First Name')
    cy.contains('label', 'Last Name')
    cy.contains('label', 'Email Address')
    cy.contains('label', 'Password')
    cy.contains('input', 'Save')
  })
  
})