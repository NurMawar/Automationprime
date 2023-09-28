describe('login spec', () => {
    it('success login', () => {
      cy.visit('https://primecodex.com/')
      cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
      cy.get('#email').type("hunihuraira@gmail.com")
      cy.get('#password').type("Testing@2023")
      cy.get('.btn').click()
      cy.get('.txt-title.d-block').should('contain.text','Attention!')
    })

    it('invalid email', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("hua@gmail.com")
        cy.get('#password').type("Testing@2023")
        cy.get('.btn').click()
        cy.get('#swal2-title').should('contain.text','We are sorry...wrong password. please check your password then try again!')
      })

    it('invalid password', () => {
        cy.visit('https://primecodex.com/')
        cy.get('[href="https://secure.primecodex.com/"] > .w-32').click()
        cy.get('#email').type("hunihuraira@gmail.com")
        cy.get('#password').type("Test")
        cy.get('.btn').click()
        cy.get('#swal2-title').should('contain.text','We are sorry...wrong password. please check your password then try again!')
      })

})