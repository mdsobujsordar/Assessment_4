import formSubmission from "./form-submission-validation.po";
const data = require('/cypress/fixtures/test-data.json');

describe('This test will validate the form submission', function () {
    const validation = new formSubmission();

    this.beforeAll(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
    })

    it('Verify error validation by leaving all fields blank and try submitting the form', () => {
        validation.visitURL(data);
        validation.contactNavigation();
        validation.blankSubmit(data);
    })
    it('Verify success validation by filling all mandatory fields', () => {
        validation.validSubmit(data);
    })
  
  })
  