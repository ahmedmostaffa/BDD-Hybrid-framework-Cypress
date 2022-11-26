const LoginPage = require("../pages/LoginPage");
it('test 1',()=>{
    cy.visit('https://www.saucedemo.com/')
        LoginPage.setUsername('standard_user')
                    .setPassword('secret_sauce')
                    .submit();

    cy.get('li.social_linkedin').scrollIntoView();                
})
it('test 2',()=>{
    cy.visit('https://www.saucedemo.com/')
        LoginPage.setUsername('standard_user')
                    .setPassword('secret_sauce')
                    .submit();
    cy.contains('Sauce Labs Backpack').click();
               
})
