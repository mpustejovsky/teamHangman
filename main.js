'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const goodGuess = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const word = ["M","A","R","K"]

const createCorrectArray = ()=>{
    for (let i=0;i<word.length;i++){
        wordCorrects[i]="_";
    }
}
let wordCorrects = [];
createCorrectArray();

const hangman = (guess) => {
    if (goodGuess.includes(guess)){
        wordCorrects[word.indexOf(guess)]=guess;
        printBoard()}
    else {console.log("must be a capital alph character")
    getPrompt()}
}

const printBoard =() =>{
    console.log (wordCorrects)
    
}


const getPrompt = () =>  {
    rl.question(`Input: Any letter
    `, (guess) => {
        
      hangman(guess);
     
      getPrompt();
    });
  }
  printBoard(); 
  getPrompt();