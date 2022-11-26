class LoginPage{
    elements={
        username:()=>cy.get('input#user-name'),
        password:()=>cy.get('input#password'),
        loginButton:()=>cy.get('input#login-button')
    }

    setUsername(username){
        this.elements.username().type(username)
        return this;
    }
    setPassword(password){
        this.elements.password().type(password)
        return this;
    }
    submit(){
        this.elements.loginButton().click();
        return this;
    }
}
module.exports=new LoginPage()