import HomePage from './HomePage'

class ContactPage extends HomePage {
  
  // Selectors
  static submitButton = "input[value='Submit']"
  static errorMessage =  '.hs-error-msg'
  static firstNameMessage = 'div.hs-firstname'
  static lastNameMessage = 'div.hs-lastname'
  static emailMessage = 'div.hs-email'
  static countryMessage = 'div.hs-country__new_'
  static areaMessage = 'div[class^="hs_what_is_your_area"]'
  static helpMessage = 'div.hs_how_can_we_help_you_'
  static legalMessage = 'div[class^="hs_LEGAL_CONSENT"]'
  static allFields = 'div.hs_error_rollup'

  submit() {
    getIframeBody().find(ContactPage.submitButton).click()
    return this;
  }

  getFirstNameMessage() {
    return getIframeBody().find(ContactPage.firstNameMessage).find(ContactPage.errorMessage)
  }

  getLastNameMessage() {
    return getIframeBody().find(ContactPage.lastNameMessage).find(ContactPage.errorMessage)
  }

  getEmailMessage() {
    return getIframeBody().find(ContactPage.emailMessage).find(ContactPage.errorMessage)
  }

  getCountryMessage() {
    return getIframeBody().find(ContactPage.countryMessage).find(ContactPage.errorMessage)
  }

  getAreaMessage() {
    return getIframeBody().find(ContactPage.areaMessage).find(ContactPage.errorMessage)
  }

  getHelpMessage() {
    return getIframeBody().find(ContactPage.helpMessage).find(ContactPage.errorMessage)
  }

  getLegalMessage() {
    return getIframeBody().find(ContactPage.legalMessage).find(ContactPage.errorMessage)
  }

  getAllFieldsMessage() {
    return getIframeBody().find(ContactPage.allFields)
  }
}

const getIframeDocument = () => {
  return cy
  .get('#hs-form-iframe-0')
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap)

}

export default ContactPage;