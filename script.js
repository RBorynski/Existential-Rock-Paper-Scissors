
var compOptions = [
{choice:"rock", image:"_"},
{choice:"paper", image:"_"},
{choice:"scissors", image:"_"},
]
var buttonsInClass = document.getElementsByClassName("rpsButtonClass");
var nextRoundButton = document.getElementById("roundButton");
var newGameButton =  document.getElementById("resetButton");
var compScreen = document.getElementById("compScreen") ;
var nameInputDOMElement = document.querySelector('.name');

// var form = document.querySelector("#form");
var form = document.querySelector('.form')

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
var name = getParameterByName('player-name');
 var identity = document.querySelector(".identity");
 identity.innerHTML = name;
// var manVs = querySelector(".identity");








// var userChoice =
 var playerScore = 0;
 var compScore = 0;



var updatePlayerScore = function(){
     var pScoreboard  = document.getElementById("playerScoreboard");
     pScoreboard.innerHTML = playerScore;
   }
var updateCompScore = function(){
     var id  = document.getElementById("compScoreboard");
     id.innerHTML = compScore;
   }
updatePlayerScore();
updateCompScore();

 var checkForGameOver = function()
 {
 if (playerScore == 3) {
         alert ("Congratulations");
  newGameButton.style.display ="block";
  nextRoundButton.style.display = "hidden";}
else if (compScore == 3) {
         alert ("Better Luck Next Time!");
  newGameButton.style.display ="block";
 nextRoundButton.style.display = "hidden";}

else {
  nextRoundButton.style.display = "block";
}
}

//generates computer choice*/
var compChoice = function(){
  var getRandomInt = function(){
  return Math.floor(Math.random() * (3));
  //getRandomInt taken from developer.mozilla.org
 }
 var zerototwo = getRandomInt();
var conv =  compOptions[zerototwo];
return conv;
}



var rButton = document.getElementById("rockButton");
var pButton = document.getElementById("paperButton");
var sButton = document.getElementById("scissorsButton");
 var rpsDisappear = function() {
 rButton.style.display = "none";
   pButton.style.display = "none";
   sButton.style.display = "none";
 }
 var rpsAppear = function() {
 rButton.style.display = "block";
   pButton.style.display = "block";
   sButton.style.display = "block";
   nextRoundButton.style.display = "none";
 }

var newGame = function(){
  rpsAppear();
  playerScore = 0;
  compScore = 0;
updatePlayerScore();
updateCompScore();
newGameButton.style.display = "none";

}

var RockVs = function(){
    // document.querySelectorAll(".gameButtons").style.display = "none" ;
  rpsDisappear();
 var y =  compChoice().choice;
 compScreen.innerHTML = y;
if (y == "paper") {
   compScore = compScore + 1;
   updateCompScore();
} else if (y == "scissors")
{
  playerScore = playerScore + 1;
  updatePlayerScore();
}
checkForGameOver();
}

var PaperVs = function(){
    // document.querySelectorAll(".gameButtons").style.display = "none" ;
  rpsDisappear();
   var y = compChoice().choice;
  compScreen.innerHTML = y;
if (y == "scissors") {
   compScore = compScore + 1;
   updateCompScore();
} else if (y == "rock")
{
  playerScore = playerScore + 1;
  updatePlayerScore();
}
checkForGameOver()
}

var ScissorsVs = function(){
    // document.querySelectorAll(".gameButtons").style.display = "none" ;
  rpsDisappear();
  var y = compChoice().choice;
   compScreen.innerHTML = y;
if (y == "rock") {
   compScore = compScore + 1;
   updateCompScore();
} else if (y== "paper")
{
  playerScore = playerScore + 1;
  updatePlayerScore();
}
checkForGameOver()
}

 rButton.addEventListener("click", RockVs);
 pButton.addEventListener("click", PaperVs);
 sButton.addEventListener("click", ScissorsVs);
  nextRoundButton.addEventListener("click", rpsAppear);
  newGameButton.addEventListener("click", newGame);
 // location.reload(forceGet)




