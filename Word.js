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

	this.checkIfLetterFound = function(guessedLetter) {
		
	   //iterates through each letter to see if it matches the guessed letter
	   var wordObject = this; 
	   console.log("Your Array is: \n");
	   console.log(wordObject.newLetter);
	   	for(var i =0; i < that.newLetter.length; i++){
	   		 if(that.newLetter[i].character === guessedLetter){
		     	that.newLetter[i].appear = true;
	    	}	
	   	}
	};

	this.wordRender = function() {
		var showLetter = "";
			   console.log(that.newLetter);
		for (var i = 0; i < that.newLetter.length; i++) {
			showLetter += that.newLetter[i].letterRender();
			//console.log("this is wordRender :" + that.newLetter[i].character);
		 }

		 console.log("this is show Letter: " + showLetter);
		return showLetter;
	};
}

module.exports = Word;

var test = new Word("abc");

console.log("addLetters: " + test.addLetters());
console.log("----------------------------------------");

console.log("checkIfLetterFound: " + test.checkIfLetterFound("a"));
console.log("checkIfLetterFound: " + test.checkIfLetterFound("b"));
console.log("----------------------------------------");

console.log("wordRender: " + test.wordRender());
console.log("----------------------------------------");

