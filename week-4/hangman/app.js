_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var word = "elephant";

var letters = [
  "qwertyuiop",
  "asdfghjkl",
  "zxcvbnm"
];

var remainingIncorrectGuesses = 6;

var maskedWord = [];
for (var i = 0; i < word.length; i++) {
  maskedWord.push('_');
}

// render masked word

var updateGameBoard = function () {
  $('.remaining').text(remainingIncorrectGuesses)
  $('.word').empty();
  $.each(maskedWord, function () {
    var letter = _.template('<span class="letter">{{letter}}</span>')
    $('.word').append(letter({letter: this}));
  });
}

updateGameBoard();

// setup keyboard

$.each(letters, function (i) {
  $.each(this.split(''), function () {
    var key = _.template('<button>{{key}}</button>');
    $('.row-' + i).append(key({key: this}));
  });
});

$('.input-keys button').on('click', function () {
  this.disabled = true;
  var key = $(this).text();
  var isCorrect = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === key) {
      isCorrect = true;
      maskedWord[i] = key;
    }
  }
  if (!isCorrect) {
    remainingIncorrectGuesses--;
  }
  updateGameBoard();
});
