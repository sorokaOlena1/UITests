class WelcomePage {

    clickDismissButton(){
        cy.log('Click Dismiss button');
        cy.get('.mat-focus-indicator.close-dialog').click();
    }

    clickCookieConfirmButton(){
        cy.get('[aria-label="dismiss cookie message"]').click();
    }
}

export default new WelcomePage();
