var Letters = require("./Letter.js");

var Word = function(word) {
	// An array of new Letter objects representing the letters of the underlying word
	this.newLetter = [];
	this.word = word;
	this.wordGet = false;
	var that = this;

	// call the function on each letter object (the first function defined in Letter.js) 
	  // that displays the character or an underscore and concatenate those together.
	this.addLetters = function() {
		for (var i = 0; i < that.word.length; i++) {
			var newLetters = new Letters(that.word[i]);
			this.newLetter.push(newLetters);
		}
	};

	//If the player does not find a letter
	this.guesses = function(guessed) {
		if(this.newLetter.every(function(char){
			return this.appear === true;
		})) {
			this.wordGet = true;
			return true;
		}

	};

	this.checkIfLetterFound = function(guessedLetter) {
		
		console.log(this.newletter);
	   //iterates through each letter to see if it matches the guessed letter
	   	this.newletter.forEach(function(char){
	    	if(char.character === guessedLetter){
		     	char.appear = true;
		     
	    	}
	   	});
	

	};

	this.wordRender = function() {
		var showLetter = " ";
		// for (var = 0; i < this.newLetter.length; i++) {
		// 	showLetter += this.newLetter.length
		// }
		that.newLetter.forEach(function(char){
			var currentLetters = char.letterRender();
			showLetter += currentLetters;
		});
		return showLetter;
	};
}


module.exports = Word;

var test = new Word("abc");


console.log("addLetters: " + test.addLetters());
console.log("----------------------------------------");

console.log(test.newLetter);
console.log("----------------------------------------");

console.log("guesses: " + test.guesses());
console.log("----------------------------------------");


console.log("checkIfLetterFound: " + test.checkIfLetterFound("a"));
console.log("----------------------------------------");


console.log("wordRender: " + test.wordRender());
console.log("----------------------------------------");

