context('Large Number', () => {
    beforeEach(() => {
        console.log("Starting Index Page test");
        cy.visit('http://localhost:3000');
    });
    
    // This is written a little bit weird but it's to account for
    // the commas in the population number.
    // There's probably a better way but this is all I could find for now.
    it('should contain a number larger than one billion', () => {
        cy.contains(/\d{1,3}(,\d{3}){2,}/).should('exist');
    });
});
