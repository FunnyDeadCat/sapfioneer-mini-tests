import "cypress-real-events/support";
import ContactPage from './ContactPage';

class HomePage {

    // Selectors
    static header = 'div.col-inner h3:first';
    static bookmarks = 'a.nav-top-link';
    static getInTouchButton = 'div.header-button a:contains("Get in touch"):first';
    static financeESGBookmark = 'a.nav-top-link:contains("Finance & ESG")';
    static financialControl = 'span.ux-menu-link__text:contains("Financial Control")';

    visit() {
        cy.visit('');
    }
  
    getHeader() {
        return cy.get(HomePage.header);
    }

    getBoomarks() {
        return cy.get(HomePage.bookmarks);
    }

    openFinancialControl() {
        cy.get(HomePage.financeESGBookmark).realHover('mouse');
        cy.get(HomePage.financialControl).click()      
    }
  
    openGetInTouch() {
        cy.get(HomePage.getInTouchButton).click();
        return new ContactPage();
    }    
  }
  
  export default HomePage;