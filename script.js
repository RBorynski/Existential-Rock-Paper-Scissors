var playerOptions = [
{choice:"rock", image:"_"},
{choice:"paper", image:"_"},
{choice:"scissors", image:"_"},
]

var compOptions = [
{choice:"rock", image:"_"},
{choice:"paper", image:"_"},
{choice:"scissors", image:"_"},
]
var buttonsInClass = document.getElementsByClassName("rpsButtonClass");
var nextRoundButton = document.getElementById("roundButton");
var newGameButton =  document.getElementById("resetButton");

console.log (newGameButton)



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
  newGameButton.style.display ="block"}

if (compScore == 3) {
         alert ("Better Luck Next Time!");
  newGameButton.style.display ="block"}

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
}





var RockVs = function(){
    // document.querySelectorAll(".gameButtons").style.display = "none" ;
  rpsDisappear();
   compChoice();
   console.log('this is my choice: ', compChoice().choice);
if (compChoice().choice == "paper") {
   compScore = compScore + 1;
   updateCompScore();
} else if (compChoice().choice == "scissors")
{
  playerScore = playerScore + 1;
  updatePlayerScore();
}
  else {
    console.log("Sorry");
  }
checkForGameOver()
 }

 rButton.addEventListener("click", RockVs);
 // pButton.addEventListener("click", PaperVs);
 // var ScissorsClick = sButton.addEventListener("click", ScissorVs);
  nextRoundButton.addEventListener("click", rpsAppear);
  newGameButton.addEventListener("click", newGame)
 // location.reload(forceGet)




