import { loginPage } from "../../pages/loginPage"

const loginObj = new loginPage()

describe('Logging in', () => {

    it('No details entered', () => {
        cy.visit('login')
        loginObj.clicksubmit()
    })
})