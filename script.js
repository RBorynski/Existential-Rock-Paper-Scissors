const compOptions = [
  { choice: "rock", image: "_" },
  { choice: "paper", image: "_" },
  { choice: "scissors", image: "_" }
];
const buttonsInClass = document.getElementsByClassName("rpsButtonClass");
const gameButtons = document.querySelector(".gameButtons");
console.log(gameButtons);
const nextRoundButton = document.getElementById("roundButton");
const newGameButton = document.getElementById("resetButton");
const compScreen = document.getElementById("compScreen");
const nameInputDOMElement = document.querySelector(".name");

// var form = document.querySelector("#form");
const form = document.querySelector(".form");

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
const name = getParameterByName("player-name");
const identity = document.querySelector(".identity");
identity.innerHTML = name;
// var manVs = querySelector(".identity");

const updatePlayerScore = function() {
  const playerScoreboard = document.getElementById("playerScoreboard");
  playerScoreboard.innerHTML = playerScore;
};

const updateCompScore = function() {
  const compScoreboard = document.getElementById("compScoreboard");
  compScoreboard.innerHTML = compScore;
};
//makes the html in the scoreboard match the actual score of player and computer

// sets the score at 0 to start the game for both player and computer
let playerScore = 0;
let compScore = 0;

updatePlayerScore();
updateCompScore();
//makes 0(the starting score) show up for both player and computer
var checkForGameOver = function() {
  if (playerScore == 3) {
    alert("Congratulations");
    newGameButton.style.display = "block";
    nextRoundButton.style.display = "hidden";
  } else if (compScore == 3) {
    alert("Better Luck Next Time!");
    newGameButton.style.display = "block";
    nextRoundButton.style.display = "hidden";
  } else {
    nextRoundButton.style.display = "block";
  }
};

//generates computer choice*/
const compChoice = function() {
  const getRandomInt = function() {
    return Math.floor(Math.random() * 3);
    //getRandomInt taken from developer.mozilla.org, gets random int between 0 and 2 (inclusive)
  };

  const conv = compOptions[getRandomInt()];
  return conv;
};

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const rpsDisappear = function() {
  gameButtons.style.display = "none";
};
const rpsAppear = function() {
  gameButtons.style.display = "block";
  nextRoundButton.style.display = "none";
};

const newGame = function() {
  rpsAppear();
  playerScore = 0;
  compScore = 0;
  updatePlayerScore();
  updateCompScore();
  newGameButton.style.display = "none";
};

var RockVs = function() {
  // document.querySelectorAll(".gameButtons").style.display = "none" ;
  rpsDisappear();
  var y = compChoice().choice;
  compScreen.innerHTML = y;
  if (y == "paper") {
    compScore = compScore + 1;
    updateCompScore();
  } else if (y == "scissors") {
    playerScore = playerScore + 1;
    updatePlayerScore();
  }
  checkForGameOver();
};

var PaperVs = function() {
  // document.querySelectorAll(".gameButtons").style.display = "none" ;
  rpsDisappear();
  var y = compChoice().choice;
  compScreen.innerHTML = y;
  if (y == "scissors") {
    compScore = compScore + 1;
    updateCompScore();
  } else if (y == "rock") {
    playerScore = playerScore + 1;
    updatePlayerScore();
  }
  checkForGameOver();
};

var ScissorsVs = function() {
  // document.querySelectorAll(".gameButtons").style.display = "none" ;
  rpsDisappear();
  var y = compChoice().choice;
  compScreen.innerHTML = y;
  if (y == "rock") {
    compScore = compScore + 1;
    updateCompScore();
  } else if (y == "paper") {
    playerScore = playerScore + 1;
    updatePlayerScore();
  }
  checkForGameOver();
};

rockButton.addEventListener("click", RockVs);
paperButton.addEventListener("click", PaperVs);
scissorsButton.addEventListener("click", ScissorsVs);
nextRoundButton.addEventListener("click", rpsAppear);
newGameButton.addEventListener("click", newGame);
// location.reload(forceGet)
