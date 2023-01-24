describe('test suite', () => {
    // before('network routes',())
    it('test 1', function () {

      cy.intercept('**/entries', (req) => {
        req.continue((res) => {
          res.setDelay(5000)
          })
        })
          
      cy.visit('https://www.demoblaze.com/')

    })

  })