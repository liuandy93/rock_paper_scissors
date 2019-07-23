/* get user's input */
let userIndex;
let userChoice;
let result;
let gameTurn = 0;   
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
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = gameArray[randomNum];

let gameStart = () => {
    gameRound = document.getElementById('gameRound').value
    while (gameRound > gameTurn) {
        
    }
}

let resultFunc = () => {
    result = gameOutcome[randomNum][userChoice];
    //console.log(finalResult[result]);
    userIndex = gameArray[userChoice];
    document.getElementById('gameText').innerHTML = finalResult[result]+ " You chose " + userIndex + ". The computer chose " + computerChoice + ".";
};

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


