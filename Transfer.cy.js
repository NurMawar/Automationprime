describe('Success transfer ', () => {
    it('success transfer', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("hunihuraira@gmail.com")
        cy.get('#password').type("Testing@2023")
        cy.get('.btn').click()
        cy.get(':nth-child(7) > .menu').click()
        cy.get('#amount').type('5')
        cy.get('.btn').click()

    })
})