/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// To create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase,
// Checking for a win, and removing a life from the scoreboard


class Game {
    constructor(missed, phrases, activePhrase){
    this.missed = 0;
    this.phrases = [
        new Phrase ("mirror mirror on the wall"),
        new Phrase ("ohana means family"),
        new Phrase ("hakuna matata"),
        new Phrase ("not today satan"),
        new Phrase ("livin la vida loca")
    ];
    this.activePhrase = null;
    };

getRandomPhrase(phrases) {
    const randomPhrase = Math.floor(Math.random()*this.phrases.length);
    return this.phrases[randomPhrase];
}


/**
* Begins game by selecting a random phrase and displaying it to user
*/
startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
}

handleInteraction(startButton){
    startButton.disabled = true;

    if (this.activePhrase.checkLetter(startButton.innerHTML)) {
        startButton.classList.add('chosen');
        this.activePhrase.showMatchedLetter(startButton.innerHTML);
    } else {
        startButton.classList.add('wrong');
        this.removeLife();
    }
    if (this.checkForWin()){
        this.gameOver(true);
    } console.log(startButton)
}


//Checks for winning move
// @return (boolean) True if game has been won, false if game wasn't won 
 checkForWin() {
    const hiddenLetters = document.getElementsByClassName('hide');
    
    if (hiddenLetters.length === 0) {
        return true;
    } else {
        return false;
    }
    
 }

// Increases the value of the missed property
// Removes a heart(life) from the scoreboard
// Checks if the player has remaining lives and ends game if player is out
removeLife(){

    const img = document.querySelectorAll('img');

    if (this.missed < 4){
        img[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
    } else {
        this.gameOver(false);
    }
}

// Display game over message
// @param (boolean) gameWon - Whether or not the user won the game 
gameOver(gameWon){
    overlay.style.display = 'flex';
    const start = document.querySelector('.start');
    const gameOverMessage = document.getElementById('game-over-message');

    if (gameWon){
        gameOverMessage.innerHTML = 'You did it!';
        overlay.className = 'win';
    } else if (!gameWon) {
        gameOverMessage.innerHTML = 'You almost had it! Try again.';
        overlay.className = 'lose';
    }

    startButton.addEventListener('click', () => {
        this.resetGame();
        game = new Game();
        game.startGame();
})}

resetGame = ()=> {
    const liPhrase = document.querySelector('#phrase ul')
    liPhrase.innerHTML = '';

    let keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.classList.remove('chosen', 'wrong');
        key.disabled = false;
    })

    const hearts = document.getElementsByTagName('img');
    for (let i = 0; i < hearts.length; i++) {
        hearts[i].src = 'images/liveHeart.png';
    }
}};