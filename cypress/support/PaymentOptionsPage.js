import BasePage from './BasePage';
import {faker} from "@faker-js/faker";

let user = {
    name: faker.name.firstName() ,
    cardNumber: faker.datatype.number({
        'min': 1000000000000000,
        'max': 9999999999999999
    }),
    password: faker.internet.password(13)
}

class PaymentOptionsPage extends BasePage{

    clickContinueButton(){
        cy.get('[aria-label="Proceed to review"]').click();
    }

    enterUserName(){
        cy.log(`Enter user name - ${user.name}`);
        // cy.get('#mat-input-1').type(user.name);
        cy.get('.mat-form-field.ng-tns-c119-32 > .mat-form-field-wrapper').type(user.name);
    }
    enterCardNumber(){
        cy.log(`Enter user card number - ${user.cardNumber}`);
        // cy.get('#mat-input-2').type(user.cardNumber);
        cy.get('.mat-form-field.ng-tns-c119-33 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(user.cardNumber);
    }

    selectExpiryMonth(){
        cy.log(`chooseExpiryMonth - 1`);
        // cy.get('#mat-input-16').click();
        // cy.get('.mat-form-field.ng-tns-c119-34 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        // cy.get('.mat-form-field.ng-tns-c119-34 > .mat-form-field-wrapper').select();
        // cy.get('#mat-input-3').click();
        cy.get('#mat-input-3').select(0)
        // cy.get('#mat-input-3').eq(1).click();
    }
    selectExpiryYear(){
        cy.log(`chooseExpiryYear -  2080`);
        cy.get('.mat-form-field.ng-tns-c119-35 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        // cy.get('#mat-input-3').click();
        // cy.get('select');
        cy.get('select').select(2080);
    }


    submitPaymentOptionForm() {
        cy.get('#mat-expansion-panel-header-0').click();
        this.enterUserName();
        this.enterCardNumber();
        this.selectExpiryMonth();
        this.selectExpiryYear();
    }



}

export default new PaymentOptionsPage();
