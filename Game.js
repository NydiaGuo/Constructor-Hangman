  // Variables that set the initial state of our hangman game.
  wordInPlay: null,
  lettersOfTheWord: [],
  matchedLetters: [],
  guessedLetters: [],
  guessesLeft: 0,
  totalGuesses: 0,
  letterGuessed: null,
  wins: 0,

// The setupGame method is called when the page first loads.
  setupGame: function() {
    // Here we pick a random word.
    var objKeys = Object.keys(this.wordsToPick);
    this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    // Split the chosen word up into its individual letters.
    this.lettersOfTheWord = this.wordInPlay.split("");
    // Builds the representation of the word we are trying to guess and displays it on the page.
    // At the start it will be all underscores since we haven't guessed any letters ("_ _ _ _").
    this.rebuildWordView();
    // This function sets the number of guesses the user gets, and renders it to the HTML.
    this.processUpdateTotalGuesses();
  },