describe('transfer', () => {
    it('success transfer', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("hunihuraira@gmail.com")
        cy.get('#password').type("Testing@2023")
        cy.get('.btn').click()
        cy.get('.logout-wrapper > .logout-btn').click()
        cy.get('.swal2-confirm').click()
        cy.get('.txt-title').should('contain.text','Login Account')
    })
})