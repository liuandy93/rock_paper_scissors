/* get user's input */
let userChoice = prompt("Please choose rock, paper, or scissors.");
userChoice.toLowerCase();

/* convert user's input into index */
let gameArray = ['rock', 'paper', 'scissors'];
let userIndex = gameArray.indexOf(userChoice);


/* generate computer's choice */
let randomNum = Math.floor(Math.random() * 3);
let computerChoice = gameArray[randomNum];


/* log the each choices on the console */
console.log("You chose " + userChoice + (". The computer chose " + computerChoice + "."));


/* make a two dimensional array */
let gameOutcome = [
                   ['t','y','l'],
                   ['l','t','y'],
                   ['y','l','t'],
                ];


/* use userChoice index (because in the end we just need the user result) to find the result in this two dimensional array */
let result = gameOutcome[randomNum][userIndex];


/* make an object to convert the final result into a sentence, so we can log it on the console */
let finalResult = {
    't': "The game is a tie!",
    'y': "You won the game!",
    'l': "You lost the game!"
};

console.log(finalResult[result]);