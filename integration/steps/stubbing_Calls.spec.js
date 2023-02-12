import loginPage from "../pages/LoginPage";
describe('do a stubbing on the internet application', function() {
    it('test the stubbing calls', function () {
        cy.on('uncaught:exception',()=>false)
        cy.window().then((w)=>{
            cy.stub(w,'open').returns({}).as('stubb')
        })
        
        cy.visit('https://demoqa.com/browser-windows')
        cy.get('#messageWindowButton').click()
        cy.get('@stubb').should('be.calledOnce')
       

        
    });
    
});