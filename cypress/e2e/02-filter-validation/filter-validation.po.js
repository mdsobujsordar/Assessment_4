class filterValidation {
    visitURL(data) {
        cy.visit(data.URL);
    }
    filterItem(data) {
        cy.contains('Hammer').scrollIntoView().should('be.visible').click();
        cy.contains('MightyCraft Hardware').scrollIntoView().should('be.visible').click();

        //Assertion
        cy.get('[data-test="filter_completed"]').scrollIntoView().should('contain', data.item_name);
    }
}
export default filterValidation;