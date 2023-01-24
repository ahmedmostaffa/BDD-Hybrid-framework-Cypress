it('test',()=>{


    cy.visit('https://the-internet.herokuapp.com/large')
    const value =6.4;
    // start with value and ends with this 
    cy.contains('td',new RegExp('^'+value+'$')).then((val)=>{
        cy.log(val.text())
    })
})