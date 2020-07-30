window.onload=()=>{
    printBoard();
    addLetterBoard();
}

const goodGuess = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const word = ["M", "A", "R", "K"]
let incorrectGuess = 0;
let wordCorrects = ['_','_','_','_'];

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

    if (goodLetter == 0) { incorrectGuess++ }

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
        document.getElementById("winning-area").innerHTML="You Won"
        console.log("you won") }
    else{
        if (incorrectGuess>9){
            document.getElementById("winning-area").innerHTML="You Are Out of Turns"
            console.log("Out Turns")}
    }
}
