


describe('test suit',()=>{
    it('recursive fucntion',()=>{
        cy.visit('https://the-internet.herokuapp.com/dynamic_content')
        searchTill()

    })
})
function searchTill(){
    cy.get('div.large-10.columns').eq(1).then((ele)=>{
        if(!ele.text().includes('Qui')){
            cy.reload()
            searchTill();   
        }else{
            cy.log('Found')
        }
    })

}