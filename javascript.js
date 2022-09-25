// let a = prompt("Choose between Rock, Paper, Scissors");
let game = ["ROCK", "PAPER", "SCISSORS"];
let random = Math.floor(Math.random() * game.length);

let input = prompt("Choose between Rock, Paper and Scissors");

function playRound(input, game) {
  if (input.toLowerCase() == "rock" && game == "ROCK") {
    alert("No one wins! You chosed " + input + " and computer chosed " + game);
  } else if (input.toLowerCase() == "rock" && game == "PAPER") {
    alert("You lose! You chosed " + input + " and computer chosed " + game);
  } else if (input.toLowerCase() == "rock" && game == "SCISSORS") {
    alert("You won! You chosed " + input + " and computer chosed " + game);
  } else if (input.toLowerCase() == "paper" && game == "ROCK") {
    alert("You won! You chosed " + input + " and computer chosed" + game);
  } else if (input.toLowerCase() == "paper" && game == "PAPER") {
    alert("No one wins! You chosed " + input + " and computer chosed " + game);
  } else if (input.toLowerCase() == "paper" && game == "SCISSORS") {
    alert("You lose! You chosed " + input + " and computer chosed " + game);
  } else if (input.toLowerCase() == "scissors" && game == "ROCK") {
    alert("You lose! You chosed " + input + " and computer chosed " + game);
  } else if (input.toLowerCase() == "scissors" && game == "PAPER") {
    alert("You won! You chosed " + input + " and computer chosed" + game);
  } else if (input.toLowerCase() == "scissors" && game == "SCISSORS") {
    alert("No one wins! You chosed " + input + " and computer chosed " + game);
  }
}
playRound(input, game[random]);
