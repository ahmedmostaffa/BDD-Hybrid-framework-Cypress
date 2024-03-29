// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import LoginPage from '../integration/pages/LoginPage'
import './commands'


// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add('doLogin',(username,paswword)=>{
    LoginPage.setUsername(username)
                .setPassword(paswword)
                .submit()
})