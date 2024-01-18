const rock = document.getElementsByClassName("rock")[0];
const papper = document.getElementsByClassName("papper")[0];
const scissors = document.getElementsByClassName("scissors")[0];
const results = document.getElementById("results");
let game = ["ROCK", "papper", "SCISSORS"];
let random = Math.floor(Math.random() * game.length);

function playRound(input, game) {
  if (input.toLowerCase() == "rock" && game == "ROCK") {
    results.insertAdjacentHTML(
      "beforeend",
      "No one wins! You chosed " + input + " and computer chosed " + game
    );
  } else if (input.toLowerCase() == "rock" && game == "papper") {
    results.insertAdjacentHTML(
      "beforeend",
      "You lose! You chosed " + input + " and computer chosed " + game
    );
  } else if (input.toLowerCase() == "rock" && game == "SCISSORS") {
    results.insertAdjacentHTML(
      "beforeend",
      "You won! You chosed " + input + " and computer chosed " + game
    );
  } else if (input.toLowerCase() == "papper" && game == "ROCK") {
    results.insertAdjacentHTML(
      "beforeend",
      "You won! You chosed " + input + " and computer chosed" + game
    );
  } else if (input.toLowerCase() == "papper" && game == "papper") {
    results.insertAdjacentHTML(
      "beforeend",
      "No one wins! You chosed " + input + " and computer chosed " + game
    );
  } else if (input.toLowerCase() == "papper" && game == "SCISSORS") {
    results.insertAdjacentHTML(
      "beforeend",
      "You lose! You chosed " + input + " and computer chosed " + game
    );
  } else if (input.toLowerCase() == "scissors" && game == "ROCK") {
    results.insertAdjacentHTML(
      "beforeend",
      "You lose! You chosed " + input + " and computer chosed " + game
    );
  } else if (input.toLowerCase() == "scissors" && game == "papper") {
    results.insertAdjacentHTML(
      "beforeend",
      "You won! You chosed " + input + " and computer chosed" + game
    );
  } else if (input.toLowerCase() == "scissors" && game == "SCISSORS") {
    results.insertAdjacentHTML(
      "beforeend",
      "No one wins! You chosed " + input + " and computer chosed " + game
    );
  }
}

rock.addEventListener("click", function () {
  playRound(rock.textContent, game[random]);
});

scissors.addEventListener("click", function () {
  playRound(scissors.textContent, game[random]);
});

papper.addEventListener("click", function () {
  playRound(papper.textContent, game[random]);
});
// playRound(input, game[random]);
