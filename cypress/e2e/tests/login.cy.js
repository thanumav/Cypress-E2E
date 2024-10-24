import { loginPage } from "../../pages/loginPage"

const loginObj = new loginPage()
import logindata from "../../fixtures/logindata.json"

describe('Logging in', () => {

    beforeEach('logging in', () => {
        cy.visit('login')
    })

    it('No details entered', () => {
        loginObj.clicksubmit()
    })

    it('Able to login successfully', () => {
        loginObj.enterUsername(logindata.username)
        loginObj.enterPassword(logindata.password)
        loginObj.clicksubmit()
        cy.get('#content').should('be.visible').and('contain', 'My Account')
    })
})