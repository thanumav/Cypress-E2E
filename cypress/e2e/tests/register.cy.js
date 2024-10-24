import { registerPage } from "../../pages/registerpage"
const registerObj = new registerPage()
import registerinfo from "../../fixtures/registerinfo.json"


describe('Registration', () => {

  it('Registration to labs', () => {

    // registerObj.openUrl()
    cy.visit('register')
    registerObj.enterfirstName(registerinfo.firstName)
    registerObj.enterlastName(registerinfo.lastName)
    registerObj.enteremail(registerinfo.email)
    registerObj.entertelephone(registerinfo.telephone)
    registerObj.enterpassword(registerinfo.password)
    registerObj.checkagree()
    registerObj.submitform()
  })
})