describe('Graph Explorer', () => {
  it('can login', () => {
    cy.visit('https://developer.microsoft.com/en-us/graph/graph-explorer')
    cy.get('span.ms-Button-flexContainer').contains('Sign in to Graph Explorer').click()
  })
});
