const LoginPage = require("../pages/LoginPage")

describe('data-driven tests',()=>{

    
    beforeEach('launch url',()=>{
        cy.visit('/')
    }) 

    it('test using json file',()=>{
        cy.fixture('data-driven.json').each((data)=>{
            LoginPage.setUsername(data.username)
                    .setPassword(data.password)
        })    
    })

    afterEach('quit session',()=>{
        cy.visit('/')
    })
})