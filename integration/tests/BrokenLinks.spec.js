describe('Check the broken links at the main page', () => {
    it('validate the available links', () => {
        cy.visit('https://staging-ment-arena.mondia.com/ar');
        var count=0;
        cy.get("a[href]").each((elem)=>{
            if (elem.attr('href').includes('http')) {
            count+=1;
            try {
                
                check(elem.attr('href'))    
            } catch (error) {   
            }
            
            }
        })
        cy.log(count)
        
    });
    

});
function check(URL){
    cy.request({
        url:URL,
        method:'GET'
    }).then((resp)=>{
        if(resp.status.valueOf()>=200){

            cy.log(`${URL}`+"----->"+" "+resp.status.valueOf()+" "+resp.status.toString)
        }else{
            cy.log(`${URL}`+"----->"+" "+resp.status.valueOf()+" "+resp.status.toString)
        }

    })
}