///<reference types="cypress"/>
import SideBarPage from '../support/SideBarPage';
import {registration} from "../support/helpers/registrationHelper";


it('Registration', () => {
  registration();
  cy.log(`Check email in Profile`);
  SideBarPage.openAccount();
  cy.get('#email').should("contain.value", email);
})
