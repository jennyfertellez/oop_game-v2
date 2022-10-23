/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
// To create a Phrase class to handle the creation of phrases

class Phrase {
    constructor(phrase){
        this.phrase = phrase;
    }

//Display phrase on game board
addPhraseToDisplay() {
    // Returns an array of letters
    const letterArray = this.phrase.split('');
    letterArray.forEach(letters => {
        let li = document.createElement('li');
        let ul = document.querySelector('ul');
        li.textContent = letters
        
        if (letters === ' '){
            li.classList.add('space');
        } else {
            li.classList.add('letter');
            li.classList.add('hide');
            li.classList.add(letters);
        } 
        ul.appendChild(li);

    });

} 

//Checks to see if the letter selected matches a letter in the phrase
// @param (string) letter - Letter to check
checkLetter(letter){
    const letterArray = this.phrase.split('');
    let letterChk ='';

    if (letterArray.includes(letter)) {
        return letterChk = true;
    } else {
        return letterChk = false;
    }
}


//Reveals the letter that matches the selection
showMatchedLetter (letter) {
    const letterMatch = document.querySelectorAll('.letter');
    
    for (let i = 0; i < letterMatch.length; i++) {
        if (letterMatch[i].classList.contains(letter) ) {
            letterMatch[i].classList.remove('hide');
            letterMatch[i].classList.add('show')
        }
    }
}

};