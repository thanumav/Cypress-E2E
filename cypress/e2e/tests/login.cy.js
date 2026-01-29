import { loginPage } from "../../pages/loginPage"

const loginObj = new loginPage()
import logindata from "../../fixtures/logindata.json"

//Login functionality
describe('Logging in', () => {

    beforeEach('logging in', () => {
        cy.visit('login')
    })
    //Case 1
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