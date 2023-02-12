describe('test the football matches', () => {
    let baseUrl='https://jsonmock.hackerrank.com/api/football_matches';
    const year=2011;
    it('test 1', () => {
        var count=0;
        cy.api({
            url:baseUrl,
            method:'GET'
            ,qs:{
                year:year,
                page:1
            }
        }).then((response)=>{

            let totalPages=response.body.total_pages
            for (let i = 1; i <= totalPages;i++) {
                cy.request({
                    url:baseUrl,
                    method:'GET',
                    qs:{
                        year:year,
                        page:i
                    }
                }).then((response)=>{
                if(response.body.team1goals==response.body.team2goals){
                    count++;
                    cy.log(count)
                }
                })
            }
            cy.log(count)
              
            }) 
        })

              
    });
    
