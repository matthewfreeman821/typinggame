window.addEventListener('load', init);

//Global variables

//Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

//to change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM element variables
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Initialize the game
function init() {
  //Load word from words
  showWord(words);
  //Start matching on typing
  wordInput.addEventListener('input', startMatch);
  //Call countdown every second
  setInterval(countdown, 1000);
  //Check game status
  setInterval(checkStatus, 50);
}

//Start matching
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  
  //if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

//Pick and Show random word
function showWord(arr) {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * arr.length);
  //output random word
  currentWord.innerHTML = arr[randIndex];
}

//countdown timer
function countdown() {
  //Make sure time is not 0
  if (time > 0) {
    //decrease time
    time--;
  } else if (time === 0) {
    //Game is over
    isPlaying = false;
  }

  //show time
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
