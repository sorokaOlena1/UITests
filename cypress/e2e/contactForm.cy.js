import {faker} from "@faker-js/faker";
import ContactFormPage from '../support/ContactFormPage';
import WelcomePage from '../support/WelcomePage';

const user = {
  name: faker.name.firstName('female'),
  comment: faker.random.words(15)
}

describe('User can', () => {
  it('be registered', () => {
    ContactFormPage.visit();
    WelcomePage.clickDismissButton();
    WelcomePage.clickCookieConfirmButton();
    ContactFormPage.fillContactForm(user.comment);
    cy.get('.mat-simple-snack-bar-content').should('contain.text', 'Thank you for your feedback.');

  })
})
