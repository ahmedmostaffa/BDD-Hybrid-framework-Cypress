class HomePage{
    elements={
        addToCartButtons:()=>cy.get('.pricebar>button'),
        shoppingCart:()=>cy.get('.shopping_cart_link'),
        pageHeader:()=>cy.get('span.title')
        
    }

    selectProducts(){
        this.elements.addToCartButtons().each(($elem)=>{
            $elem.click()
        })
        return this;
    }
    clickOnCart(){
        this.elements.shoppingCart().click();
        return this;
    }
    


}