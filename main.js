'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const goodGuess = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const word = ["M", "A", "R", "K"]
let incorrectGuess = 0;

const createCorrectArray = () => {
    for (let i = 0; i < word.length; i++) {
        wordCorrects[i] = "_";
    }
}

const checkforWin = () => {
    let counter1 = 0;

    

    for (let i = 0; i < word.length; i++) {
        if (word[i] == wordCorrects[i]) {
            counter1++
        }
    }

    if (counter1 == word.length) { console.log("you won") }
    else{
        if (incorrectGuess>9){console.log("Out Turns")}
    }
}

let wordCorrects = [];
createCorrectArray();

const hangman = (guess) => {
    let goodLetter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == guess) {
            goodLetter++;
            wordCorrects[i] = guess
        }
    }

    if (goodLetter == 0) { incorrectGuess++ }

    console.log(`Incorrect guess = ${incorrectGuess}`)

    checkforWin();
    printBoard()

    getPrompt()
}


const printBoard = () => {
    console.log(wordCorrects)

}


const getPrompt = () => {
    rl.question(`Input: Any letter
    `, (guess) => {

        hangman(guess);

        getPrompt();
    });
}
printBoard();
getPrompt();