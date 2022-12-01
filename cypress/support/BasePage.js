export default class BasePage{
    
    getLoginButton(){
        return cy.get('#navbarLoginButton');
    }

    clickLoginButton(){
        this.getLoginButton().click();
    }

    clickYourBasketButton(){
        cy.get('[aria-label="Show the shopping cart"]').click();
    }

    getSearchButton(){
        return cy.get("[data-mat-icon-type='font']:contains(' search ')");
    }

    clickSearchButton(){
        this.getSearchButton().click();
    }

    getSearchInput(){
        return cy.get('.mat-form-field.mat-search_field');
    }
}