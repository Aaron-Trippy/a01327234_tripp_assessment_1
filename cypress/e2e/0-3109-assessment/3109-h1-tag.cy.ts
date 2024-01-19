context('H1 Tag', () => {
    beforeEach(() => {
        console.log("Starting Index Page test");
        cy.visit('http://localhost:3000');
    });

    it('should contain exactly one h1 tag', () => {
        cy.get('h1').should('have.length', 1);
    });
});
