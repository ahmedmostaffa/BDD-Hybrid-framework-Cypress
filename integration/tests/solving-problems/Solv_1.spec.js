const loginPage = require("../../pages/LoginPage");
import 'cypress-map';
//import spok from 'cy-spok'
const spok =require('cy-spok');
describe('test the inner text of every elem', () => {

    it('how to verify the array in Cypress', () => { 
        cy.visit('https://www.saucedemo.com/')
        loginPage.setUsername('standard_user')
                .setPassword('secret_sauce')
                .submit();
                                
                cy.get('div.pricebar>button')
                .map('innerText').should(spok(['ADD TO CART','ADD TO CART','ADD TO CART','ADD TO CART','ADD TO CART','ADD TO CART']))

                cy.get('div.pricebar>button').eq(0).click()
            });
        
});