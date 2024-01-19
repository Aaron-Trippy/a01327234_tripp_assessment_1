context('Image', () => {
    beforeEach(() => {
        console.log("Starting Index Page test");
        cy.visit('http://localhost:3000');
    });

    it('should contain an image', () => {
        cy.get('img').should('exist');
    });
});
