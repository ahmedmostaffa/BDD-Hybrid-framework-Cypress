const { defineConfig } = require('cypress')
const cucumber = require("cypress-cucumber-preprocessor").default
const mysql = require('mysql2')

//const faker = require('faker');

function queryTestDb(query, config) {
    // creates a new mysql connection using credentials from cypress.json env's
    const connection = mysql.createConnection(config.env.db);
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
function createRandomUser(){
  return {
    userId: Math.random.toString().substring(2,8),
    email:"standard_user",
    pass:"secret_sauce"
  };
}


module.exports = defineConfig({
  e2e: {
    "specPattern": "**/*.{spec.js,js}",
    "chromeWebSecurity":false,
    "screenshotOnRunFailure":true,
    "includeShadowDom":true,
    "experimentalRunAllSpecs":false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir:"cypress/report",
      reportFileName:"report",
      charts: true,
      embeddedScreenshots:true,
      reportPageTitle: 'custom-title',
      inlineAssets: true,
      saveAllAttempts: false,
      HTMLAllCollection:true,
      JSON:false
    },
    "env": {
      "db": {
        "host": "localhost",
        "user": "root",
        "password": "",
        "database": "database"
      }
    },

    
    
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    setupNodeEvents(on, config){
      on('task',{
        queryDb: query => {
          return queryTestDb(query, config)
        }
      })
    },setupNodeEvents(on, config){
      on('task',{
        getRandomData: () => {
          return createRandomUser();
        }
      })
    },
  }
  
})
