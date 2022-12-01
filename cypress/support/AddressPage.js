import BasePage from './BasePage';
import {faker} from '@faker-js/faker';

let address = {
    country: faker.address.country(),
    name: faker.name.firstName(),
    phone: faker.datatype.number({
        'min': 1000000,
        'max': 9999999999
    }),
    zipCode: faker.address.zipCode('########'),
    address: faker.address.streetAddress(),
    city: faker.address.city(),

  }

class AddressPage extends BasePage{

    clickAddNewAddressButton(){
        cy.get('[aria-label="Add a new address"]').click();
    }

    clickContinueButton(){
        cy.get('#submitButton').click();
    }

    enterCountry(){
        cy.log(`Enter country - ${address.country}`);
        cy.get('[placeholder="Please provide a country."]').type(address.country);
    }

    enterName(){
        cy.log(`Enter name - ${address.name}`);
        cy.get('[placeholder="Please provide a name."]').type(address.name);
    }

    enterPhone(){
        cy.log(`Enter phone - ${address.phone}`);
        cy.get('[placeholder="Please provide a mobile number."]').type(address.phone);
    }

    enterZipCode(){
        cy.log(`Enter zipcode - ${address.zipCode}`);
        cy.get('[placeholder="Please provide a ZIP code."]').type(address.zipCode);
    }

    enterAddress(){
        cy.log(`Enter adress - ${address.address}`);
        cy.get('[placeholder="Please provide an address."]').type(address.address);
    }

    enterCity(){
        cy.log(`Enter city - ${address.city}`);
        cy.get('[placeholder="Please provide a city."]').type(address.city);
    }

    submitAddressForm(){
        this.enterCountry();
        this.enterName();
        this.enterPhone();
        this.enterZipCode();
        this.enterAddress();
        this.enterCity();
    }
}

export default new AddressPage();
