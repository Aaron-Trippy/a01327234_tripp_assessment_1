context('Header', () => {
    beforeEach(() => {
        console.log("Starting Index Page test");
        cy.visit('http://localhost:3000');
    });

    it('should contain a header', () => {
        cy.get('header').should('exist');
    });
});
