context('Text Content', () => {
    beforeEach(() => {
        console.log("Starting Index Page test");
        cy.visit('http://localhost:3000');
    });

    it('should contain the word "Canada" anywhere on the page', () => {
        cy.contains('Canada').should('exist');
    });
});
