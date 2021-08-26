
let diceArray = [1,2,3,4,5,6]; //Here we define the values of the dice 

//Here we stablish the variable that later is going to trigger the game
let start = document.getElementById('start');

start.addEventListener('click', game);


function game () {
   let userChoice = diceArray[Math.floor(Math.random() * diceArray.length)];
   let pcChoice = diceArray[Math.floor(Math.random() * diceArray.length)]; //Here we create the value of the random choice made by the opponent (PC)


   if (userChoice == pcChoice) {
       alert ("It's a draw, try again!");
   } else if (userChoice > pcChoice) {
       alert ("You won! " + userChoice + " beats " + pcChoice);
   } else if (pcChoice > userChoice) {
       alert ("You lost! " + pcChoice + " beats " + userChoice);
   }

};