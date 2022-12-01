import BasePage from "./BasePage";

class SideBarPage extends BasePage{

    clickAccountButton(){
        cy.get('#navbarAccount').click();
    }

    getMenuPanel(){
        return cy.get('#mat-menu-panel-0');
    }

    openAccount(){
        this.clickAccountButton();
        cy.get('.mat-menu-content > [aria-label="Go to user profile"]').click();
    }

}
export default new SideBarPage();