describe('create-user-form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/signup')
    })

    const textInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const pwdInput = () => cy.get('input[name="password"]')
    const pwdConfInput = () => cy.get('input[name="passwordConfirmation"]')
    const acctSelect = () => cy.get('select[name="account"]')
    const agreeChk =() => cy.get('input[name="tos"]')
    const submitBtn = () => cy.get('button[name="submitButton"]')

    it('elements are there', () => {
        textInput().should('exist')
        emailInput().should('exist')
        pwdInput().should('exist')
        pwdConfInput().should('exist')
        acctSelect().should('exist')
        agreeChk().should('exist')
        submitBtn().should('exist')

    })
    
    it('button and checkbox work or not work as they should or should not', () => {
        submitBtn().should('be.disabled')
        agreeChk().should('not.be.checked')
            .click()
            .should('be.checked')
            .click()
            .should('not.be.checked')
    })

    it('can select account type from drop-downs', () => {
        acctSelect().should('have.value','')
            .select('Editor')
            .should('have.value', 'Editor')
            .select('- Select an option -')
            .should('have.value', '')
    })

    it('can type in all text fields and that activates submit button and it submits', () => {
        textInput().type('text@text.text')
        emailInput().type('text@text.text')
        pwdInput().type('text@text.text')
        pwdConfInput().type('text@text.text')
        textInput().should('have.value','text@text.text')
        emailInput().should('have.value','text@text.text')
        pwdInput().should('have.value','text@text.text')
        pwdConfInput().should('have.value','text@text.text')
        acctSelect().select('Editor')
        agreeChk().click()
        submitBtn().should('be.enabled').click()
    })
})
