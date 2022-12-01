import BasePage from './BasePage';
import WelcomePage from './WelcomePage';

class LoginPage extends BasePage{
    visit(){
        cy.log(`Open login page`);
        cy.visit('/#/login');
    }

    enterEmail(email){
        cy.log(`Enter user email - ${email}`);
        cy.get(`[name='email']`).type(email);
    }

    enterPassword(password){
        cy.log(`Enter user password -  ${password}`);
        cy.get(`[name='password']`).type(password);
    }

    clickLoginButton(){
        cy.log('Click Log in button');
        cy.get(`#loginButton`).click();
    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    submitLoginForm(email, password){
        WelcomePage.clickDismissButton();
        WelcomePage.clickCookieConfirmButton();
        this.login(email, password);
    }


}

export default new LoginPage();
