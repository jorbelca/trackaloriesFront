import getCompleteDate from '../../src/Services/completeDate'
const username = 'test'
const email = 'test@test.es'
const password = 'test'
const sex = 'Female'
const weight = 65
const height = 160
const activity = 'I make exercise 6 or more days of the week'
const updatedEmail = 'test@test'


beforeEach(() => {
  cy.restoreLocalStorage();
});

describe("Trackalories App", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000")
    cy.contains("TrackAlories")
    cy.contains("Register").click()
  })
})


describe("Register and Login", function () {
  it("can register a user", function () {
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
  before(() => {
    cy.login();
    cy.saveLocalStorage();
  });
  it("can search food", function () {
    cy.get('[data-cy="search-bar"]').type('duck')
    cy.get(".button").contains("Search").click().wait(400)
    cy.get(".button-add").click().wait(400)
    cy.get('[data-cy="search-bar"]').type('beer')
    cy.get(".button").contains("Search").click()
    cy.get(".button-add").click().wait(900)
    cy.contains("624.88 Kcal")
    cy.contains("Save in the diary").click().wait(200)
    cy.on('window:confirm', () => true);
  })
})



describe("Diary", function () {
  const date = getCompleteDate()
  it("can see the searched food", function () {
    cy.get("a.icon-text i.fa-solid.fa-folder-open").click().wait(5000)
    cy.get(".dropdown-trigger").contains(date).click()
  })
})


describe("Update Profile", function () {
  it("can update the email profile", function () {
    cy.contains(username).click()
    cy.get('[data-cy="update-email"]').type(updatedEmail)
    cy.get('[data-cy="update-activity"]').select('I make exercise 2 days of the week')
    cy.get('[data-cy="update-button"]').click()
  })
})

describe("Eliminate Profile", function () {
  it("can eliminate the profile", function () {
    cy.contains("Log In").click()
    cy.get('[data-cy="login-email"]').type(`${updatedEmail}`)
    cy.get('[data-cy="login-password"]').type(`${password}`)
    cy.get(".button").contains("Login").click().wait(500)
    cy.contains(username).click()
    cy.get('[data-cy="delete-profile"]').click({ multiple: true })
    cy.on('window:confirm', (text) => { expect(text).to.contains("You're going to eliminate all the information of your profile. This action is irrevocable. Want to continue?"); })

  })
})