import BasePage from './BasePage';

class OrderSummaryPage extends BasePage{


    clickCheckoutButton() {
        cy.get('button#checkoutButton').click();
    }

}

export default new OrderSummaryPage();
