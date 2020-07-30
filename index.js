window.onload=()=>{
    selectWord();
    printBoard();
    addLetterBoard();
    
}

//this function randomly selects the word and a hint to be played with.  Add more if you want
const selectWord =()=>{
    let randomNum = Math.floor(Math.random() * 10)

    console.log("random =" + randomNum)

    switch (randomNum){
        case 0:
        word = ['E','Q','U','A','T','I','O','N']
        hint="in mathematics, a statement that the values of two mathematical expressions, the left hand side and the right hand side are equal"
        case 1:
        word = ["D","E","B","U","G"]
        hint="find and eliminate erros in a computer program"
        break;
        case 2:
        word=["O","C","T","A","L"]
        hint="numbers expressed in the base of eight, instead of 10, using 0, 1, 2,3 4, 5, 6 and 7 only;"
        break;
        case 3:
        word = ["L","O","G","I","S","T","I","C","S"]
        hint="is generally the detailed organization and implementation of a complex operation."
        break;
        case 4:
        word = ['A','N','A','L','O','G']
        hint="in computing, relating to or using signals or information represented by a continuously variable physical quantity such as spatial position, voltage, etc."
        break;
        case 5:
        word = ['G','R','A','P','H','I','C','S']
        hint="(computer) are pictures and films created using computers. Usually, the term refers to computer-generated image"
        break;
        case 6:
        word = ['A','R','R','A','Y']
        hint="is a data structure consisting of a collection of elements (values or variables), each identified by at least one index"
        break;
        case 7:
        word = ['C','O','M','P','I','L','E','R']
        hint="	is a program that translates source code into object code"
        break;
        case 8:
        word = ['B','A','N','D','W','I','D','T','H']
        hint="In computing, this is the maximum rate of data transfer across a given path"
        break;
        case 9:
        word = ['D','A','T','A','B','A','S','E']
        hint="is a collection of information organized in such a way that a computer program can quickly select desired pieces of data."
        break;
    }
   
    //this code builds our wordsCorrect array to match the size of word

    for (let i=0;i<word.length;i++)
        {wordCorrects[i]="_"}

}

const goodGuess = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let word = [];
let incorrectGuess = 0;
let wordCorrects = [];
let hint;

const printBoard = () =>{
    removeAllChildNodes();
    document.getElementById("incorrect-count").innerHTML="Incorrect Guess = " + incorrectGuess
    const listElement = document.getElementById("correct-answer")
    wordCorrects.map(letter=>{ 
     const li = document.createElement('li')
     listElement.append(li)
     li.setAttribute("id",letter);
     li.innerHTML=letter;
    })
}

function removeAllChildNodes() {

    const parent=document.getElementById("correct-answer");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const addLetterBoard = ()=>{
    const listElement = document.getElementById("guess-letter")
    goodGuess.map(letter=>{ 
     const li = document.createElement('li')
     
     const button = document.createElement('button')
     button.innerHTML=letter;
     button.setAttribute("id",letter);
     button.addEventListener("click",function(){
         document.getElementById(letter).style.visibility="hidden";
         hangman(this.id)

     })
     li.appendChild(button)
     listElement.append(li)
    })

}


const hangman = (guess) => {   
    let goodLetter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == guess) {
            goodLetter++;
            wordCorrects[i] = guess
        }
    }

    if (goodLetter == 0) { 
        incorrectGuess++;
        if (incorrectGuess>10){incorrectGuess=10}//this keeps from going above images loaded//
        document.getElementById("image-area").style.backgroundImage = `url(./img/image${incorrectGuess}.JPG)`;
         }

    console.log(`Incorrect guess = ${incorrectGuess}`)
    console.log (wordCorrects)
    checkforWin();
    printBoard()  
}


const checkforWin = () => {
    let counter1 = 0;

    

    for (let i = 0; i < word.length; i++) {
        if (word[i] == wordCorrects[i]) {
            counter1++
        }
    }

    if (counter1 == word.length) {         
        confirm("You have Won.  Way to go!!");//this is similar to alert, but seems to stop code until conformation;
        resetGame();
        console.log("you won") }
    else{
        if (incorrectGuess>9){
            confirm("You are a LOSER");//this is similar to alert, but seems to stop code until conformation;
            resetGame();

            console.log("Out Turns")}
    }
}

const showHint=()=>{
    document.getElementById("display-hint").innerHTML=hint;
}

const resetGame = ()=>{
    incorrectGuess=0;
    //code clears all letters so they can be restored
    const parent=document.getElementById("guess-letter");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    document.getElementById("display-hint").innerHTML="";
    //end of clearing letters
    document.getElementById("image-area").style.backgroundImage = `url(./img/image0.JPG)`;
    wordCorrects=[];
    selectWord();
    printBoard();
    addLetterBoard();

}