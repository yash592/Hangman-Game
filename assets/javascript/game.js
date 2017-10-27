


var words = ["bached", "baches", "backed", "backup", "badger", "bagels", "bagful"];
var score = 0;
var guesses = 6;
var losses = 0;
var guessarray = [];
var correctguesses = [];
var wrongguesses =[];




function pickaword () {
	 pickedword = words[Math.floor(Math.random()*words.length)];
};

pickaword();
console.log(pickedword);

function makeunderscorearray () {
	for ( i = 0; i < pickedword.length; i++ ) {
		guessarray.push("_");

	}

document.getElementById("secret").innerHTML = guessarray;	

}

makeunderscorearray();
console.log(guessarray);



function resetgame () {

	guesses = 6;
	word = pickaword();
	newarray = makeunderscorearray();
	wrongguesses = [];

}



document.onkeyup = function () {
	var userGuess = event.key;
	console.log(event.key);	

	if (pickedword.indexOf(userGuess) > -1) {

		correctguesses.push(userGuess);
		guessarray[pickedword.indexOf(userGuess)] = userGuess;		
		
		score++;

	}

	else {

	wrongguesses.push(userGuess);
	document.getElementById("guessed").innerHTML = "Letters already guessed: " + wrongguesses;
	
	guesses--;
	document.getElementById("remaining").innerHTML ="Number of guesses remaining: " + guesses;

}

if (guessarray.indexOf("_") < 0) {
	alert("You win!");
	document.getElementById("wins").innerHTML ="Wins: " + score;
	resetgame();

}

if (guesses <= 0) {
	alert("Game over!");
	losses++;
	document.getElementById("losses").innerHTML ="Losses: " + losses;
	resetgame();
	console.log(pickedword);
	}

}











	













