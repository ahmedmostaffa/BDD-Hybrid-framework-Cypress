describe('suite1 ',()=>{



    it('test_1',()=>{
        const arr =Cypress._.each(['standarad_user','secte_suace'],function($val){
                cy.visit('https://www.saucedemo.com/')
                cy.doLogin($val,'dadadad')
        })
    })
})