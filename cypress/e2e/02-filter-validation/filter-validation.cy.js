import filterValidation from "./filter-validation.po";
const data = require('/cypress/fixtures/test-data.json');

describe('This test will validate the functionality of the filters to ensure accurate results are displayed', function () {
    const validation = new filterValidation();

    this.beforeAll(() => {
        cy.window().then(win => win.sessionStorage.clear());
        cy.clearCookies();
        cy.clearLocalStorage();
    })

    it('Verify filter Hammer from By Category & Mighty Craft Hardware from By Brand to narrowdown the results', () => {
        validation.visitURL(data);
        validation.filterItem(data);
    })
  
  })
  