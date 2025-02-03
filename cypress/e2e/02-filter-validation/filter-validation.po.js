class filterValidation {
    visitURL(data) {
        cy.visit(data.URL);
    }
    filterItem(data) {
        cy.get('[data-test="category-01JK6C2KR3ZA5B2VHJG0NX0W9W"]').scrollIntoView().should('be.visible').click();
        cy.get('[data-test="brand-01JK6C2KPTA6HF69F7107HF52H"]').scrollIntoView().should('be.visible').click();

        //Assertion
        cy.get('[data-test="filter_completed"]').scrollIntoView().should('contain', data.item_name);
    }
}
export default filterValidation;