import BasePage from "./BasePage";

class MainPage extends BasePage{

    clickAddToBasket(productIndex){
        productIndex = parseInt(productIndex);
        cy.get('[aria-label="Add to Basket"]').eq(productIndex).click();
    }

}
export default new MainPage();