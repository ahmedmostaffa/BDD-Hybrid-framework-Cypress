class CartPage{

    elements={
        Products:()=>cy.get('.inventory_item_name'),
        checkoutButton:()=>cy.get('button#checkout')
    }

    doCheckout(){
        this.elements.checkoutButton().click()
        return this;
    }

   
}