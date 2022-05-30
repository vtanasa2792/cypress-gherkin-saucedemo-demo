import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import onLoginPage from "../../pages/onLoginPage";
import loginPage from "../../pages/onLoginPage";
import onProductsPage from "../../pages/onProductsPage";
import onUniversalPageHeader from "../../pages/onUniversalPageHeader";

Given('The user is on the login page', () => {
    cy.visit('/')
})

When('The user inserts the username {string}', (username) => {
    onLoginPage.typeUsername(username)
})

And('Inserts the password {string}', (password) => {
    onLoginPage.typePassword(password)
})

And('Selects the Login button', () => {
    onLoginPage.clickLoginBtn()
})

Then('The user is taken to the {string} page', (landingPageTitle) => {
    onUniversalPageHeader.elements.pageHeader().should('contain', landingPageTitle)
})

When('The user inserts the username {string}', (lockedUser) => {
    onLoginPage.elements.typeUsername(lockedUser)
})

And('Inserts the password {string}', (password) => {
    onLoginPage.elements.typePassword(password)
})

And('Selects the Login button', () => {
    onLoginPage.elements.loginBtn().click()
})

Then('The {string} error is displayed', (errorMessage) => {
    onLoginPage.elements.errorPrompt().should('contain', errorMessage)
})