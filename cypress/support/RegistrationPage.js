import {faker} from '@faker-js/faker';
import BasePage from './BasePage';
import WelcomePage from './WelcomePage';

let user = {
    animal: faker.animal.bird() ,
    email: faker.internet.email(),
    password: faker.internet.password(13)
  }


class RegistrationPage extends BasePage{
    
    enterUserEmail(email){
        cy.log(`Enter user email - ${email}`);
        cy.get('#emailControl').type(email);
    }

    enterUserPassword(password){
        cy.log(`Enter user password - ${password}`);
        cy.get('#passwordControl').type(password);
    }

    enterUserRepeatPPassword(password){
        cy.log(`Enter user repeat password - ${password}`);
        cy.get('#repeatPasswordControl').type(password);
    }
    ////

    selectSecondSecurityQuestion(){
        cy.log(`Select second security question`);
        cy.get(`[name='securityQuestion']`).click();
        cy.get('#mat-option-2').click();
    }

    enterAnswer(animal){
        cy.log(`Enter answer - ${animal}`);
        cy.get('#securityAnswerControl').type(animal);
    }

    clickRegisterButton(){
        cy.log('Click register button');
        cy.get('#registerButton').click();
    }


    registerNewUser(){
        cy.log('Open registration page');
        cy.visit('/#/register');
        WelcomePage.clickDismissButton();
        this.enterUserEmail(user.email);
        this.enterUserPassword(user.password);
        this.enterUserRepeatPPassword(user.password);
        this.selectSecondSecurityQuestion();
        this.enterAnswer(user.animal);
        this.clickRegisterButton();
        return [user.email, user.password]
    }


}

export default new RegistrationPage();