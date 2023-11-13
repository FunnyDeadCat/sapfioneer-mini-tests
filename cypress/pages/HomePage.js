import "cypress-real-events/support";
import 'cypress-iframe';
import ContactPage from '../pages/ContactPage';

class HomePage {

    static header = 'div.col-inner h3:first';
    static bookmarksSelector = 'a.nav-top-link';
    static getInTouchButton = 'div.header-button a:contains("Get in touch"):first';
    static financeESGBookmarkSelector = 'a.nav-top-link:contains("Finance & ESG")';
    static financialControlSelector = 'span.ux-menu-link__text:contains("Financial Control")';


    visit() {
        cy.visit('');
    }
  
        
    getHeader() {
        return cy.get(HomePage.header);
    }

    getBoomarks() {
        return cy.get(HomePage.bookmarksSelector);
    }

    openFinancialControl() {
        cy.get(HomePage.financeESGBookmarkSelector).realHover('mouse');
        cy.get(HomePage.financialControlSelector).click()      
    }
  
    openGetInTouch() {
        cy.get(HomePage.getInTouchButton).click();
        return new ContactPage();
    }    
  }
  
  export default HomePage;