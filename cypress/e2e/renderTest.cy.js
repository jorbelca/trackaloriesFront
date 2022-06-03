import getCompleteDate from '../../src/Services/completeDate'

describe("Trackalories App", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000")
    cy.contains("TrackAlories")
    cy.contains("Register")
    cy.contains("Register")
  })
})

describe("Login", function () {
  it("can login", function () {
    cy.contains("Log In").click()
    cy.contains("Login")
    cy.get('[data-cy="login-email"]').type('test@test')
    cy.get('[data-cy="login-password"]').type('test')
    cy.get(".button").contains("Login").click()
  })
})

describe.skip("Search", function () {
  it("can search food", function () {
    cy.get('[data-cy="search-bar"]').type('duck')
    cy.get(".button").contains("Search").click()
    cy.get(".button-add").click().wait(200)
    cy.get('[data-cy="search-bar"]').type('beer')
    cy.get(".button").contains("Search").click()
    cy.get(".button-add").click().wait(200)
    cy.contains("624.88 Kcal")
    cy.contains("Save in the diary").click().wait(200)
    // cy.contains("Aceptar").click()   EN ELECTRON NO FUNCIONA
  })
})



describe("Diary", function () {
  const date = getCompleteDate()
  it("can see the searched food", function () {
    cy.get("a.icon-text i.fa-solid.fa-folder-open").click()
    cy.get(".dropdown-trigger").contains(date).click()
  })
})
