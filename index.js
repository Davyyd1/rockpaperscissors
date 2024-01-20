const rock = document.querySelector(".rock");
const papper = document.querySelector(".papper");
const scissors = document.querySelector(".scissors");
const imgRock = document.querySelector(".img__rock");
const imgScissors = document.querySelector(".img__scissors");
const imgPapper = document.querySelector(".img__papper");
const playerChoice = document.querySelector(".results__player__choice");
const computerChoice = document.querySelector(".results__computer__choice");
const playerScore = document.querySelector(".results__player__score--1");
const computerScore = document.querySelector(".results__computer__score--1");

let game = [rock, papper, scissors];
let random = Math.floor(Math.random() * game.length);
// console.log(game[random].children[0].attributes.src.nodeValue);

let scorePlayer = 0;
let scoreComputer = 0;

const init = function () {
  playerScore.textContent = scorePlayer;
  computerScore.textContent = scoreComputer;
  playerChoice.style.display = "none";
  computerChoice.style.display = "none";
};
init();

const showPlayersChoices = function (pathPlayer, pathComputer) {
  playerChoice.src = pathPlayer;
  computerChoice.src = pathComputer;
};

const pressButtons = function (item) {
  item.addEventListener("click", function (e) {
    showPlayersChoices(
      e.target.attributes.src.nodeValue,
      game[random].children[0].attributes.src.nodeValue
    );
    playerChoice.style.display = "flex";
    computerChoice.style.display = "flex";
  });
};
pressButtons(rock);
pressButtons(papper);
pressButtons(scissors);
// display player choice into "your choice" field

//display computer choice into "computer choice" field
