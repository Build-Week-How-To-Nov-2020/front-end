describe('create-user-form', () => {

    beforeEach(() => {
        // cy.visit('https://how-to-november2020.netlify.app/howtos')
        cy.visit('localhost:3000/newhowto')

    })

    const titleInput = () => cy.get('input[name="title"]')
    const descInput = () => cy.get('textArea[name="description"]')
    const userId =() => cy.get('input[name="userId"]')
    const agreeChk =() => cy.get('input[name="howToTOS"]')
    const submitBtn = () => cy.get('button[name="submitButton"]')

    it('elements are there', () => {
        titleInput().should('exist')
        descInput().should('exist')
        userId().should('exist')
        submitBtn().should('exist')

    })
    
    it('button is disabled on empty form', () => {
        submitBtn().should('be.disabled')
            })


    it('can type in all text fields and that activates submit button and it submits', () => {
        titleInput().type('How To How-To')
        descInput().type(`Don't`)
        titleInput().should('have.value','How To How-To')
        descInput().should('have.value',`Don't`)
        userId().type(1)
        userId().should('have.value', 1)
        agreeChk().click()
        submitBtn().should('be.enabled').click()

    })
})