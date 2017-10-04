var wins = 0;
var losses = 0;
const MAX_GUESSES = 9;
var guessesRemaining = MAX_GUESSES;
var computerLetter = "";
var userLetter = "";
var userLettersGuessed = "";
var comma = "";
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
document.getElementById("z1").innerHTML = "Wins: " + wins;
document.getElementById("z2").innerHTML = "Losses: " + losses;
document.getElementById("z3").innerHTML = "Guesses Left: " + guessesRemaining;
document.getElementById("z4").innerHTML = "Your Guesses so far: ";
document.getElementById("z5").innerHTML = "<img src=assets/images/goodluck.jpg />";

// This event runs when the user presses a key.
document.onkeyup = function(event) {

// Get the key the user pressed.
	var userLetter = event.key;
  console.log("userLetter = " + userLetter);

// Change the user's letter to lowercase.
	userLetter = userLetter.toLowerCase();
  console.log("userLetter in lowercase: " + userLetter);

// Check to see if it's a new game.
	if (guessesRemaining === MAX_GUESSES) {
    comma = "";
    userLettersGuessed = "";
    document.getElementById("z4").innerHTML = "Your Guesses so far: " + userLettersGuessed;
    computerLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
    console.log("computerLetter = " + computerLetter);
    document.getElementById("z3").innerHTML = "Guesses Left: " + MAX_GUESSES;
    document.getElementById("z5").innerHTML = "<img src=assets/images/goodluck.jpg />";
  }
    else {
      comma = ", ";
    }

// Test for the user guessing correctly on the first guess.
//    computerLetter = "g";
//    console.log("computerLetter = " + computerLetter);
//End Test

  if (userLetter === computerLetter) {
  	updateWins();
  }
  else if (guessesRemaining === 1) {
  	updateLosses();
  }
  else {
  	updateGame();
  }

// The user won.
  function updateWins() {
  	wins++;
    guessesRemaining = MAX_GUESSES;
    console.log("userLettersGuessed = " + userLettersGuessed);
  	document.getElementById("z1").innerHTML = "Wins: " + wins;
    document.getElementById("z3").innerHTML = "Guesses Left: " + guessesRemaining;
    document.getElementById("z4").innerHTML = "Your Guesses so far: ";
    document.getElementById("z5").innerHTML = "<img src=assets/images/youwon.jpg />";
  }

// The user lost.
  function updateLosses() {
  	losses++;
    guessesRemaining = MAX_GUESSES;
    console.log("userLettersGuessed = " + userLettersGuessed);
  	document.getElementById("z2").innerHTML = "Losses: " + losses;
    document.getElementById("z3").innerHTML = "Guesses Left: " + guessesRemaining;
    document.getElementById("z4").innerHTML = "Your Guesses so far: ";
    document.getElementById("z5").innerHTML = "<img src=assets/images/youlose.jpg />";
  }

 // The user guessed the wrong letter. The game isn't over, there are more guesses left.
  function updateGame() {
  	guessesRemaining--;
    userLettersGuessed += comma + userLetter;  	
  	console.log("userLettersGuessed = " + userLettersGuessed);
  	document.getElementById("z3").innerHTML = "Guesses Left: " + guessesRemaining;
  	document.getElementById("z4").innerHTML = "Your Guesses so far: " + userLettersGuessed;
  }
}
