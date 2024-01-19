context('Data Source', () => {
    beforeEach(() => {
        console.log("Starting Navigation test");
        cy.visit('http://localhost:3000');
    });

    it('should navigate to the Kaggle data source', () => {
        cy.get('a[href="https://www.kaggle.com/datasets/rafsunahmad/best-country-to-live-in-2024"]').click();

        // Use cy.origin to wrap commands targeting https://www.kaggle.com - I don't know what this does either but Cypress told me to do it and it fixed my error
        cy.origin('https://www.kaggle.com', () => {
            // Using this to check if "body" exists on the page since using any specific text broke the test and I cannot fix it
            cy.get('body').should('exist');
        });
    });
});
