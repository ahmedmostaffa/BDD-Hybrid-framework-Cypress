
const { describe } = require("mocha");

describe('API tests', () => {
    var API_Authentication = '/api-clients/'

    it('test1', () => {
        cy.fixture('test-body.json').each(data=>{
            it('API authentication', () => {
                cy.request({
                    url: 'https://simple-books-api.glitch.me'+API_Authentication,
                    method: 'POST',
                    header: {
                        'Content-Type': "application/json"
                    },
                    body:data
                }).as('response').should('have.a.property','accessToken').expect()
            })

        })
    })
})

