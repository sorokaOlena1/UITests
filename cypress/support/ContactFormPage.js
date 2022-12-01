import BasePage from './BasePage';
require('cypress-commands')
let stringMath = require('string-math');

class ContactFormPage extends BasePage{
    visit(){
        cy.log('Open contact form page');
        cy.visit('/#/contact');
    }

    enterValueCommentInput(comment){
        cy.get('#comment').type(comment);
        cy.log(`Input comment - ${comment}`);
    }

    setRatingSlider() {
        cy.get('div .mat-slider').focus().type("{rightarrow}{rightarrow}{rightarrow}")
    }

    submitCaptchaQuestion() {
       cy.get('#captcha').then(($el) => {
           const question = $el.text();
           cy.get('#captchaControl').type(stringMath(question))
       });

    }

    getSubmitButton() {
        return cy.get('#submitButton');
    }

    clickSubmitButton(){
        this.getSubmitButton().click();
    }

    fillContactForm(comment){
        this.enterValueCommentInput(comment);
        this.setRatingSlider();
        this.submitCaptchaQuestion();
        this.clickSubmitButton();
    }

}

export default new ContactFormPage ();
