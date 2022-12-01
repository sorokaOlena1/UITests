///<reference types="cypress"/>
import MainPage from '../support/MainPage';
import BasketPage from '../support/BasketPage';
import AddressPage from '../support/AddressPage';
import DeliverySelectPage from '../support/DeliverySelectPage';
import DeliveryMethodPage from '../support/DeliveryMethodPage';
import OrderSummaryPage from '../support/OrderSummaryPage';
import PaymentOptionsPage from '../support/PaymentOptionsPage';
import {registration} from "../support/helpers/registrationHelper";

it('Place order', () => {
  registration();
  MainPage.clickAddToBasket(2);
  MainPage.clickAddToBasket(3);
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
