import BasePage from './BasePage';

class SelectAddressPage extends BasePage{

    clickRadioButton(){
        cy.get('.mat-row > .cdk-column-Selection').click();
    }


    clickContinueButton(){
        cy.get('[aria-label="Proceed to payment selection"]').click();
    }


}

export default new SelectAddressPage();
