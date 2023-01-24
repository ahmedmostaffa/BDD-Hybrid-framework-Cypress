
const object={
    expectedRes:"Add to cart"
}
describe('test suite', () => {
    it('test 1', function () {

        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_password').invoke('remove');
        cy.task("getRandomData").then(function(data){
            cy.get('#user-name').type(data.email);
            cy.get('#password').type(data.pass)
            cy.get('#login-button').dblclick();
            cy.xpath("//*[text()='Add to cart']").invoke('text').as('innerText')
            const arr=Cypress._.chain('@innerText').map().value()
            cy.wrap(arr)

                         
        })

    })
})
