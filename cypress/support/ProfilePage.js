import BasePage from './BasePage';

class ProfilePage extends BasePage{
    
    clickCheckoutButton(){
        cy.get('#checkoutButton').click();
    }

}

export default new ProfilePage();