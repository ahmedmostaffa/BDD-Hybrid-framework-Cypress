
const { beforeEach } = require("mocha");
const { describe } = require("mocha");
const LoginPage = require("../pages/LoginPage");

describe('test suite',()=>{

    beforeEach('setUp',function (){
        cy.visit('https://www.saucedemo.com/')
        /**
         * 
        LoginPage.setUsername('standard_user')
                    .setPassword('secret_sauce')
                    .submit();
        */

        cy.doLogin('standard_user','secret_sauce')


         })

    it('test_1',()=>{
            cy.get('.product_sort_container').select('za');
            cy.get('.select_container').should('have.text','Name (Z to A)');
    })

    afterEach("after each test",function(){
        if(this.currentTest.state=='failed'){
            cy.log("the test is failed ")
            console.log('test is failed ')
        }
    })


})