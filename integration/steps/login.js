import { Given,When,And,Then } from "cypress-cucumber-preprocessor/steps"

const HomePage =require("../pages/HomePage")
const LoginPage =require('../pages/LoginPage') 

Given('user open swgaLabs login page',()=>{
        cy.visit("/");
})

When('user enter {string} and {string}',(username,password)=>{  
        LoginPage.setUsername(username)
                    .setPassword(password)
                    
                    

})
Then('error message will be displayed',()=>{
        LoginPage.clickLoginButton()
        cy.fixture('test-data.json').then(testData=>{
                LoginPage.elements.getErrorMessage().should('have.text',testData.error_message)             
        })
        
})

