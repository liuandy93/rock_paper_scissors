/* get user's input */
let userIndex;
let userChoice;
let randomNum;
let result;
let gameTurn = 0; 
let compScore = document.querySelector('#compScore');
let playerScore = document.querySelector('#playerScore'); 
compScore = 0;
playerScore = 0; 
let gameArray = ['rock', 'paper', 'scissors'];
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

/* make a two dimensional array */
let gameOutcome = [
    ['t','y','l'],
    ['l','t','y'],
    ['y','l','t'],
 ];

/* make an object to convert the final result into a sentence, so we can log it on the console */
let finalResult = {
    't': "The game is a tie!",
    'y': "You won the game!",
    'l': "You lost the game!"
};

/* generate computer's choice */
let compGen = () => {
    randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameArray[randomNum];
}

let gameStart = () => {
    compGen();
    gameText.innerHTML = "Please choose rock, paper, or scissors."
} 


let resultFunc = () => {
    result = gameOutcome[randomNum][userChoice];
    //console.log(finalResult[result]);
    userIndex = gameArray[userChoice];
    document.getElementById('gameText').innerHTML = finalResult[result] + " You chose " + userIndex + ". The computer chose " + computerChoice + ".";
    
    if (result === 'y') {
        playerScore ++;
        document.getElementById('playerScore').innerHTML = playerScore;
    } else if (result === 'l') {
        compScore ++;
        document.getElementById('compScore').innerHTML = compScore;
    }

    setTimeout(function(){ 
        document.getElementById('gameText').innerHTML = "Please choose rock, paper, or scissors.";
    }, 3000);

    compGen();
};

let reset = () => {
    playerScore = 0;
    compScore = 0;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;

}

rock.addEventListener('click', () => {
    userChoice = gameArray.indexOf('rock');
    resultFunc();
});

paper.addEventListener('click', () => {
    userChoice = gameArray.indexOf('paper');
    resultFunc();
});

scissors.addEventListener('click', () => {
    userChoice = gameArray.indexOf('scissors');
    resultFunc();
});


