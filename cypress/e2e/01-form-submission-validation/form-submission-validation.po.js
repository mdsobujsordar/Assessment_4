class formSubmission {
    visitURL(data) {
        cy.visit(data.URL);
    }
    contactNavigation() {
        cy.get('ul li').contains('Contact').should('be.visible').click();
    }
    blankSubmit(data) {
        cy.xpath("//input[@type='submit']").should('be.visible').click();

        //validate the page navigation after blank submit

        cy.url().should('contain', data.URL);
    }
    validSubmit (data) {
        cy.get('#first_name').should('be.visible').type(data.first_name);
        cy.get('#last_name').should('be.visible').type(data.last_name);
        cy.get('#email').should('be.visible').type(data.email);
        cy.get('#subject').should('be.visible').select(2);
        cy.get('#message').should('be.visible').type(data.message);
        cy.xpath("//input[@type='submit']").should('be.visible').click();
        //validate the success message

        cy.get('.alert').should('be.visible').should('have.text', ' Thanks for your message! We will contact you shortly. ')
    }
}
export default formSubmission;