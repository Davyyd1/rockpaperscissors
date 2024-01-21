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
const winner = document.querySelector(".winner");
const winnerAnnouncement = document.querySelector(".winner__announcement");

let game = [rock, papper, scissors];
// let random = Math.floor(Math.random() * game.length);
let computerChoiceClass;

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

const showResults = function (color, result) {
  winnerAnnouncement.style.backgroundImage = "none";
  winnerAnnouncement.style.backgroundColor = color;
  winner.insertAdjacentHTML("afterbegin", result);
};

const scoreIncreaseP = function () {
  scorePlayer++;
  playerScore.textContent = scorePlayer;
};
const scoreIncreaseC = function () {
  scoreComputer++;
  computerScore.textContent = scoreComputer;
};

const playRound = function (item, computerPlay) {
  if (item == computerPlay.className) {
    showResults("#FEC10B", "Equality");
    scoreIncreaseP();
    scoreIncreaseC();
  }

  if (item == "rock" && computerPlay.className == "scissors") {
    showResults("#0ead43", "You won!");
    scoreIncreaseP();
  }

  if (item == "rock" && computerPlay.className == "papper") {
    showResults("#C5370F", "You lose!");
    scoreIncreaseC();
  }
  if (item == "papper" && computerPlay.className == "rock") {
    showResults("#0ead43", "You won!");
    scoreIncreaseP();
  }
  if (item == "papper" && computerPlay.className == "scissors") {
    showResults("#C5370F", "You lose!");
    scoreIncreaseC();
  }
  if (item == "scissors" && computerPlay.className == "papper") {
    showResults("#0ead43", "You won!");
    scoreIncreaseP();
  }
  if (item == "scissors" && computerPlay.className == "rock") {
    showResults("#C5370F", "You lose!");
    scoreIncreaseC();
  }
};

const pressButtons = function (item) {
  item.addEventListener("click", function (e) {
    computerChoiceClass = game[Math.floor(Math.random() * game.length)];
    playRound(item.classList[0], computerChoiceClass);
    showPlayersChoices(
      e.target.attributes.src.nodeValue,
      computerChoiceClass.children[0].attributes.src.nodeValue
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
