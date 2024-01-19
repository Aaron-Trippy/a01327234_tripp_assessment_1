context('Footer', () => {
    beforeEach(() => {
        console.log("Starting Index Page test");
        cy.visit('http://localhost:3000');
    });

    it('should contain a footer', () => {
        cy.get('footer').should('exist');
    });
});
