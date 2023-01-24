describe('test suite', () => {
    it('test 1', function () {

        cy.visit('https://www.powerlanguage.co.uk/acpt/')
        cy.get('.close-icon').click();
        cy.wait(3000)
        let words = ['hello','world','wings']
        tryNextWord(words)


    })
})

function tryNextWord(wordList) {
    // we should be seeing the list shrink with each iteration
    if (wordList.length < 20) {
      console.log(wordList)
    }
    cy.log(`word list with ${wordList.length} words`)
    expect(wordList).to.not.be.empty
    const word = Cypress._.sample(wordList)
    expect(word, 'picked word').to.be.a('string')
    cy.log(`**${word}**`)
    enterWord(word)
    cy.wait(2000)
  
    // count the correct letters. If we have all letters correct, we are done
    let count = 0
   
    cy.get(`game-row[letters=${word}]`)
      .find('game-tile')
      .should('have.length', word.length)
      .each(($tile, k) => {
        const letter = $tile.attr('letter')
        // only consider the status from the characters
        // we see for the first time in this word
        const evaluation = $tile.attr('evaluation')
  
        if (evaluation === 'absent') {
          wordList = wordList.filter((w) => !w.includes(letter))
        } else if (evaluation === 'present') {
          wordList = wordList.filter((w) => w.includes(letter))
        } else if (evaluation === 'correct') {
          count += 1
          wordList = wordList.filter((w) => w[k] === letter)
        }
      })
      .then(() => {
        if (count === word.length) {
          cy.log('**SOLVED**')
        } else {
          tryNextWord(wordList)
        }
      })
  }
  function enterWord(word){
    word.split('').forEach((letter) => {
        cy.window().trigger('keydown', { key: letter })
    })
    cy.window().trigger('keydown', { key: 'Enter' })
    
  }