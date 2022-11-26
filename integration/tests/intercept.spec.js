describe('test intercept command ',()=>{

    it('test 1',()=>{
        cy.intercept({
            url:'**/entries'
            ,method:'GET'
    }).as('handleFlakiness')


        cy.visit('https://www.demoblaze.com/')
        cy.wait('@handleFlakiness').its('response.statusCode').should('eq',200)
       
    })




})