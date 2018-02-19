var Letters = require("./Letter.js");

var Word = function(word) {
	// An array of new Letter objects representing the letters of the underlying word
	this.newLetter = [];
	this.word = word;

	// call the function on each letter object (the first function defined in Letter.js) 
	  // that displays the character or an underscore and concatenate those together.
	this.addLetters = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetters = new Letters(this.word[i]);
			this.newLetter.push(newLetters);
		}
	};


	// A function that takes a character as an argument 
	//   // and calls the guess function on each letter object (the second function defined in Letter.js)
	// this.guesses = function(guessed) {


	// }

};


var test = new Word("abc");

console.log(test.addLetters);

module.exports = Word;