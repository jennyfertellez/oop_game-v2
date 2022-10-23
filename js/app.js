/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// To create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons

const phrase = new Phrase();

let game = '';

// Listens for clicks on the start button
// Initiates Game class
const startButton = document.getElementById('btn__reset');
    startButton.addEventListener('click', () => {
       game = new Game();
       game.startGame();
    });

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

const keyButton = document.getElementById('qwerty');
    keyButton.addEventListener('click', e => {
        if (e.target.className === 'key') {
            game.handleInteraction(e.target);
        }
    });