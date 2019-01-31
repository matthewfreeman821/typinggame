window.addEventListener('load', init);

//Global variables
let time = 5;
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
  'javascipt',
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
  //Call countdown every second
  setInterval(countdown, 1000);
  //Check game status
  setInterval(checkStatus, 50);
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
    message.innerHTML = 'Game Over!!!'
  }
}