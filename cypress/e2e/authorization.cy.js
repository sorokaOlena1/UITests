///<reference types="cypress"/>
import LoginPage from '../support/LoginPage';
import user from '../user.json'
import SideBarPage from '../support/SideBarPage';

it('Authorization', () => {
  LoginPage.visit();
  LoginPage.submitLoginForm(user.email, user.password);
  cy.log(`Check email in Profile`);
  SideBarPage.openAccount();
  cy.get('#email').should("contain.value", user.email);
})