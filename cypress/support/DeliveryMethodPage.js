import BasePage from './BasePage';

class DeliveryMethodPage extends BasePage{

    clickRadioButton(number) {
        cy.get('label.mat-radio-label').eq(number).click();
    }

    clickContinueButton(){
        cy.get('[aria-label="Proceed to delivery method selection"]').click();
    }

}

export default new DeliveryMethodPage();
