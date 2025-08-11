describe('Navigation', () => {
  it('should navigate to the comic details page', () => {
    cy.intercept('GET', '/comic/1689').as('getComic')
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="#comics"]').click()

    cy.get('h3')
      .contains(
        'Official Handbook of the Marvel Universe (2004) #10 (MARVEL KNIGHTS)',
      )
      .click()

    cy.wait('@getComic').then(() => {
      cy.url().should('include', '/comic/1689')
    })
  })
})
