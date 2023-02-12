function getMatches(year,page){
    let baseUrl='https://jsonmock.hackerrank.com/api/football_matches';
    //const year=2011;
    cy.request({
        url:baseUrl,
        method:'GET',
        qs:{
            year:year,
            page:i
        }

    })
}
module.exports=cy.invoke(getMatches(year,1))