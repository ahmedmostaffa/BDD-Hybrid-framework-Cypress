
const LoginPage = require("../pages/LoginPage")

describe('suite 1 ',{ keystrokeDelay: 100 },()=>{
    beforeEach('test 1 ',()=>{
        cy.visit('https://www.saucedemo.com/')
        LoginPage.setUsername('standard_user')
                    .setPassword('secret_sauce')
                    .submit();
        cy.get('span.title').invoke('text').as('pageHeader')            
    })

    it('get page header using then',()=>{
        cy.get('span.title').then((innerText)=>{
          const getInnertext=innerText.text();
          cy.log(getInnertext)  
        })
    })

    it('test 2',function(){
        cy.log(this.pageHeader);
    })

    it('test 3',function(){
    
        expect(this.pageHeader).to.be.equal('Products')
    })

    it('invoke alias',function(){
        cy.get('span.title').invoke('text').as('pageHeader')
    })

})