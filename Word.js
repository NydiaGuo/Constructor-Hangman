var Letters = require("./Letter.js");

var Word = function(word) {
	// An array of new Letter objects representing the letters of the underlying word
	this.newLetter = [];
	this.word = word;

	// call the function on each letter object (the first function defined in Letter.js) 
	  // that displays the character or an underscore and concatenate those together.
	this.addLetters = function(char, appear) {
		//for (var i = 0; i < this.newLetter.length; i++) {
			this.newLetter.push(new Letters(char, appear));
		//}
	};


	// A function that takes a character as an argument 
	  // and calls the guess function on each letter object (the second function defined in Letter.js)

};


var test = new Word("abc");

test.addLetters('b');

console.log(JSON.stringify(test));