describe('Myaccount ', () => {
    it('success create real account', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("hunihuraira@gmail.com")
      cy.get('#password').type("Testing@2023")
      cy.get('.btn').click()
      cy.get('[href="/create-account"] > .btn').click()
      cy.get('.btn').click()
    })

    it('success create demo account', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("hunihuraira@gmail.com")
        cy.get('#password').type("Testing@2023")
        cy.get('.btn').click()
        cy.get('[href="/create-account-demo"] > .btn').click()
        cy.get('.btn').click()
    })
})