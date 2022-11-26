const { defineConfig } = require('cypress')
const cucumber = require("cypress-cucumber-preprocessor").default
const mysql = require('mysql2')
function queryTestDb(query, config) {
    // creates a new mysql connection using credentials from cypress.json env's
    const connection = mysql.createConnection(config.env.db)
    // start connection to db
    connection.connect()
    // exec query + disconnect to db as a Promise
    return new Promise((resolve, reject) => {
     connection.query(query, (error, results) => {
        if (error) reject(error)
        else {
          connection.end()
          // console.log(results)
          return resolve(results)
        }
      })
    })
}

module.exports = defineConfig({
  e2e: {
    "specPattern": "**/*.{spec.js,feature,js}",
    "chromeWebSecurity":false,
    "screenshotOnRunFailure":true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir:"cypress/report",
      charts: true,
      embeddedScreenshots:true,
      reportPageTitle: 'custom-title',
      inlineAssets: true,
      saveAllAttempts: false,
    },
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    setupNodeEvents(on, config){
      on('task',{
        queryDb: query => {
          return queryTestDb(query, config)
        }
      })
    },
  }
  
})
