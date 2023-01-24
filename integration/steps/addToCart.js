const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");
const HomePage =require("../pages/HomePage")
const LoginPage =require('../pages/LoginPage') 
const CartPage=require("../pages/CartPage")

Given('user open login page',()=>{
    cy.visit('https://www.saucedemo.com/')
})
When('user enter {string} and {string}',(username,password)=>{
    LoginPage.setUsername(username)
                    .setPassword(password)
})
Then('user navigate to home page',()=>{
    LoginPage.clickLoginButton()
    HomePage.elements.pageHeader().should('be.visible')
})
Given('home page is displayed',()=>{
    HomePage.elements.pageHeader().should('have.text','Products')
})
When('user select all the products',()=>{

    HomePage.selectProducts()
})
Then('All the selected products are present',()=>{
    HomePage.clickOnCart()
    
})
Then('the count of the selected items is {int}',(count)=>{
    CartPage.elements.products().should('have.length',count)
})