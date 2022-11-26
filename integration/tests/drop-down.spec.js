const cypress = require("cypress");
const { beforeEach } = require("mocha");
const { describe } = require("mocha");
const LoginPage = require("../pages/LoginPage");

describe('test suite',()=>{

    beforeEach('setUp',()=>{
        cy.visit('https://www.saucedemo.com/')
        LoginPage.setUsername('standard_user')
                    .setPassword('secret_sauce')
                    .submit();
    })

    test('test_1',()=>{
            cy.get('.product_sort_container').select('za');
            cy.get('.select_container').should('have.text','Name (Z to A)');
    })


})