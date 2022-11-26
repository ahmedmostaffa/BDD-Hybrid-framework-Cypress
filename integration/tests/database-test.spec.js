
describe('Database testing',()=>{






    it('select data from user table',()=>{
        cy.task("queryDb","select * from users").then((result)=>{
                expect(result).to.equal("")
        })
    })
})