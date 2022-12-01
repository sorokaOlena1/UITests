import MainPage from '../support/MainPage';
import BasketPage from '../support/BasketPage';
import DeliveryMethodPage from '../support/DeliveryMethodPage';
import OrderSummaryPage from '../support/OrderSummaryPage';
import PaymentOptionsPage from '../support/PaymentOptionsPage';
import {registration} from "../support/helpers/registrationHelper";
import {findProduct} from "../support/helpers/productSearchHelper";
import AddressPage from "../support/AddressPage";
import DeliverySelectPage from "../support/DeliverySelectPage";

describe('User can', () => {
  it('purchase a product via Search', () => {
    registration();
    MainPage.clickSearchButton();
    MainPage.getSearchInput().type('b').type('{enter}');

    findProduct('Strawberry Juice (500ml)');

    MainPage.clickYourBasketButton();
    BasketPage.clickCheckoutButton();
    AddressPage.clickAddNewAddressButton();
    AddressPage.submitAddressForm();
    AddressPage.clickContinueButton();
    DeliverySelectPage.clickRadioButton();
    DeliverySelectPage.clickContinueButton()
    DeliveryMethodPage.clickRadioButton(1);
    DeliveryMethodPage.clickContinueButton();
    PaymentOptionsPage.submitPaymentOptionForm();
    PaymentOptionsPage.clickContinueButton();
    OrderSummaryPage.clickCheckoutButton();
    cy.get('h1.confirmation').should('contain.text', 'Thank you for your purchase!')

  })
})
