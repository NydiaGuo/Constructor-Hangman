// Contains a constructor, Letter. This constructor should be able to either display an underlying character
  // or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
var Letter = function(char, appear) {
	// A string value to store the underlying character for the letter
	this.char = char;
	// A boolean value that stores whether that letter has been guessed yet
	this.appear= false;

	// A function that returns the underlying character if the letter has been guessed, 
	 // or a placeholder (like an underscore) if the letter has not been guessed
	this.letterInput= function() {
		//if user puts any letters, returns the input letters
		if (this.appear) {
			return this.char;
		//if they do not put any letters, it returns underscores
		} 
		return "_";
	};
		
	// A function that takes a character as an argument and checks it against the underlying character,
 	// updating the stored boolean value to true if it was guessed correctly
	this.checkLetters = function(letter) {
		//if the input letter in the letter array, show the letters
		if (letter === this.char) {
			this.appear = true;
		} 
	};
};



//users input for testing
var a = new Letter('a');

// input.letterInput() // returns '_'
console.log(a.letterInput());

// input.checkLetters("a") // returns true
console.log(a.checkLetters('a'));

// input.letterInput(); //returns "a"
console.log(a.letterInput());

module.exports = Letter;