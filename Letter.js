// Contains a constructor, Letter. This constructor should be able to either display an underlying character
  // or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 
var Letter = function(char) {
	// A string value to store the underlying character for the letter
	this.character = char;
	// A boolean value that stores whether that letter has been guessed yet
	this.appear = false;

	this.letterRender = function() {
		if (this.character === " ") {
			this.appear = true;
			return " ";
		} else if (!this.appear) {
			return "_";
		} else {
			return this.character;
		}
	};
};


module.exports = Letter;
