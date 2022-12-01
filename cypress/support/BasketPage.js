import BasePage from './BasePage';

class BasketPage extends BasePage{

    clickCheckoutButton(){
        cy.get('#checkoutButton').click();
    }

}

export default new BasketPage();
