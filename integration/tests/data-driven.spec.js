const LoginPage = require("../pages/LoginPage")

describe('data-driven tests',()=>{

    
    beforeEach('launch url',()=>{
        cy.visit('https://www.saucedemo.com')
    }) 

    it('test using json file',()=>{
        cy.fixture('data-driven.json').each((data,index)=>{
            cy.log(index)
            LoginPage.setUsername(data.username)
                    .setPassword(data.password)
                                
        })    
        cy.get('#login-button').invoke('click')
    })

})