
const { describe } = require("mocha");
describe('API tests', () => {
    var API_Authentication = '/api-clients/'
    var Get_orders = '/orders/'
    const baseURL = 'https://simple-books-api.glitch.me'
    before('API authentiaction', function () {
        var data = {
            "clientEmail": "john"+Math.random()+"@gmail.com",
            "clientName": "eni"+Math.random()
        }
        
        cy.fixture('test-body.json').then((data_body) => {
            cy.api({
                url: baseURL + API_Authentication,
                method: 'POST',
                header: {
                    'Content-Type': "application/json"
                },
                body: data_body
            }).then(function (result) {
                cy.wrap(result.body.accessToken).as('accessToken')
            })
        })
    })

    it('get an order', function () {
        cy.api({
            url: baseURL + Get_orders,
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        }).then((response) => {
            cy.log(response.isOkStatusCode)
            expect(response.isOkStatusCode).to.be.true
        })

    })


})

