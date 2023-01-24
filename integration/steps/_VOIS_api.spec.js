describe("api test extract comments",function(){
    var baseURL="https://jsonplaceholder.typicode.com/";

    it('regular expression ',function(){
        cy.api({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/",
            qs:{
                "postId":1
            }
        }).then((reponse)=>{
                cy.wrap(reponse.body,new RegExp("/[^:](\/\/.*)")).then((body)=>{
                    expect(body).match(new RegExp("[^:](\/\/.*)"))
                    var pattern=/[^:](\/\/.*)/g;
                    var arr=body.match(pattern);
                    cy.wrap(arr).each((str)=>{
                        cy.log(str)
                    })
                    // Java regular expression ---> [^:]//.*[a-z]
                    // JavaScript regular expression ---> [^:](\/\/.*)

                })
                
        })

    })
    it('album title', () => {
        cy.api({
            method:"GET",
            url:baseURL+"albums",    
        }).then((response)=>{
            cy.wrap(response.body).each((str)=>{
                expect(str.title.length).is.lessThan(300)
            })
            
        })
        
    });
    it('post-request', () => {
        cy.api({
            method:"POST",
            url:baseURL+"posts",
            
            body:{
                title: 'test_task',
                body: 'bar',
                userId: 1,
              }, 
        }).then(response=>{
            cy.log(response.status.valueOf())
        })
        
    });
    it.only('todos requests', () => {
        cy.api({
            method:"GET",
            url:baseURL+'todos'
        }).then((res)=>{
            cy.get(res.body).each((varr)=>{
                if(varr.completed==true){
                    cy.log(varr.title)
                }
            })
        })
        
    });

})