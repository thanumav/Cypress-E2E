export class registerPage {

    webLocators = {

        'firstName': '[name="firstname"]',
        'lastName': '[name="lastname"]',
        'email': '[name="email"]',
        'telephone': '[name="telephone"]',
        'password': '[name="password"]',
        'confirmPassword': '[name="confirm"]',
        'agreeButton': '[name="agree"]',
        'submit': '[class="btn btn-primary"]'
    }

    openUrl() {
        cy.visit(Cypress.env('url'))
    }

    enterfirstName(firstName) {
        cy.get(this.webLocators.firstName).type(firstName)
    }

    enterlastName(lastName) {
        cy.get(this.webLocators.lastName).type(lastName)
    }

    enteremail(email) {
        cy.get(this.webLocators.email).type(email)
    }

    entertelephone(telephone) {
        cy.get(this.webLocators.telephone).type(telephone)
    }

    enterpassword(password) {
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.confirmPassword).type(password)
    }

    checkagree() {
        cy.get(this.webLocators.agreeButton).check()
    }

    submitform(submit) {
        cy.get(this.webLocators.submit).click()
    }

}