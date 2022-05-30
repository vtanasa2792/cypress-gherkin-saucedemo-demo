class onLoginPage {

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorPrompt: () => cy.get('.error-message-container'),
        errorPromptBtn: () => cy.get('.error-button')
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLoginBtn() {
        this.elements.loginBtn().click();
    }
}

module.exports = new onLoginPage();