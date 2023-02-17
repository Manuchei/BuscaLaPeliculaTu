describe('empty spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173')
      cy.get('#titulo').type('alien')
      cy.get('#anho').type('1979')
      cy.get('#palabras_prohibidas').type('Terror')
      cy.get('#search').click()
      cy.get('#list').contains(
       "Alien Giger's Alien The Alien Encounters Alien Portrait The Alien Alien (1979)")
    })
  })