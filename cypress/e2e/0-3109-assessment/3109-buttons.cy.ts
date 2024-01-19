context('Buttons', () => {
    beforeEach(() => {
        console.log("Starting Index Page test");
        cy.visit('http://localhost:3000');
    });

    it('should contain two buttons', () => {
        cy.get('button').should('have.length', 2);
    });
});
