const rock = document.querySelector(".rock");
const papper = document.querySelector(".papper");
const scissors = document.querySelector(".scissors");
const imgRock = document.querySelector(".img__rock");
const imgScissors = document.querySelector(".img__scissors");
const imgPapper = document.querySelector(".img__papper");
const playerChoice = document.querySelector(".results__player__choice");
const computerChoice = document.querySelector(".results__computer__choice");
console.log(playerChoice);

// display player choice into "your choice" field
playerChoice.src = imgScissors.src;

//display computer choice into "computer choice" field
computerChoice.src = imgRock.src;
