export class loginPage {

    webLocators = {
        username: '#input-email',
        password: '#input-password',
        submit: '[value="Login"]'
    }

    enterUsername(username) {
        cy.get(this.webLocators.username).type(username)
    }

    enterPassword(password) {
        cy.get(this.webLocators.password).type(password)
    }

    clicksubmit() {
        cy.get(this.webLocators.submit).click()
    }
}