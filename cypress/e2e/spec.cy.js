import HomePage from '../pages/homePage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const homePage = new HomePage();

beforeEach(() => {
  homePage.visit();
})

describe('Test suite for SAP Fioneer home page', () => {
  it('Verify all bookmarks on home page', () => {

    const expectedBookmarkText = [
      'Banking',
      'Insurance',
      'Finance & ESG',
      'Services',
      'Partners',
      'Company',
      'Resources',
      'English'
    ];

    var bookmarks = homePage.getBoomarks()

    // Verify there are 8 bookmarks on home page
    bookmarks.should('have.length', 8)

    // Verify all bokmarks
    bookmarks.each((bookmark, index) => {
      cy.wrap(bookmark).should('have.text', expectedBookmarkText[index]);
    }
    );
  })

  it('Verify navigation to Financial Control page', () => {

    // Navigate to Financial Controls
    homePage.openFinancialControl()

    // Verify correct navigation to Financial Controls page
    cy.url().should('eq', Cypress.config().baseUrl+'/finance-esg/financial-control/')
    homePage.getHeader().should('have.text', 'Financial Control');
  })
})

describe('Test siute for Contact page', () => {
  it('Verify validation messages in Get in touch page', () => {

    const fieldMessage = 'Please complete this required field.'
    const dropDownMessage = 'Please select an option from the dropdown menu.'
    const allFieldsMessage = 'Please complete all required fields.'

    // Navigate to Contact page
    var contactPage = homePage.openGetInTouch();
    
    // Verify correct navigation to Contact page
    contactPage.getHeader().should('have.text', 'Get in touch');
    cy.url().should('eq', Cypress.config().baseUrl+'/contact/')
    
    // Submit empty form
    contactPage.submit();

    // Verify validation messages
    contactPage.getFirstNameMessage().should('have.text', fieldMessage);
    contactPage.getLastNameMessage().should('have.text', fieldMessage);
    contactPage.getEmailMessage().should('have.text', fieldMessage);
    contactPage.getCountryMessage().should('have.text', dropDownMessage);
    contactPage.getAreaMessage().should('not.exist')
    contactPage.getHelpMessage().should('have.text', fieldMessage);
    contactPage.getLegalMessage().should('have.text', fieldMessage);
    contactPage.getAllFieldsMessage().should('have.text', allFieldsMessage);
  })
})