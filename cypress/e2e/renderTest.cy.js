import getCompleteDate from '../../src/Services/completeDate'
const username = 'test'
const email = 'test@test.es'
const password = 'test'

const sex = 'Female'
const weight = 65
const height = 160
const activity = 'I make exercise 6 or more days of the week'

describe("Trackalories App", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000")
    cy.contains("TrackAlories")
    cy.contains("Register").click()
  })
})


describe("Register and Login", function () {
  it.skip("can register a user", function () {
    cy.contains("Register")
    cy.get('[data-cy="register-username"]').type(`${username}`)
    cy.get('[data-cy="register-email"]').type(`${email}`)
    cy.get('[data-cy="register-password"]').type(`${password}`)
    cy.get('[data-cy="register-birthdate"]').type('2000-09-18')
    cy.get('[data-cy="register-sex"]').select(`${sex}`)
    cy.get('[data-cy="register-weight"]').type(weight)
    cy.get('[data-cy="register-height"]').type(height)
    cy.get('[data-cy="register-activity"]').select(`${activity}`)
    cy.get('[data-cy="register-checkbox"]').click()
    cy.get('[data-cy="register-button"]').type(`${email}`).contains("Register").click()
  })
  it("can login", function () {
    cy.contains("Log In").click()
    cy.contains("Login").wait(1000)
    cy.get('[data-cy="login-email"]').type(`${email}`)
    cy.get('[data-cy="login-password"]').type(`${password}`)
    cy.get(".button").contains("Login").click()
  })
})




describe("Search", function () {
  it("can search food", function () {
    cy.get('[data-cy="search-bar"]').type('duck')
    cy.get(".button").contains("Search").click()
    cy.get(".button-add").click().wait(200)
    cy.get('[data-cy="search-bar"]').type('beer')
    cy.get(".button").contains("Search").click()
    cy.get(".button-add").click().wait(200)
    cy.contains("624.88 Kcal")
    cy.contains("Save in the diary").click().wait(200)

  })
})



describe.skip("Diary", function () {
  const date = getCompleteDate()
  it("can see the searched food", function () {
    cy.get("a.icon-text i.fa-solid.fa-folder-open").click().wait(1000)
    cy.get(".dropdown-trigger").contains(date).click()
  })
})


describe("Eliminate Profile", function () {
  it("can eliminate the profile", function () {
    cy.contains(username).click()
    cy.get('.button.is-fullwidth.is-responsive.is-danger').click()
    // cy.get('[data-cy="delete-profile"]').click().wait(1000)
    // cy.contains('Aceptar').click()
  })
})