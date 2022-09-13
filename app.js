/* Imports */
 import { getRandomItem } from './utils.js';

let  gameState = 'guess'; //'guess' or "results"
let guess = ''; //flip-shell-1, flip-shell-2, flip-shell-3
let flip = '' ; //shell-1, shell-2, shell-3,shell-1-incorrect, shell-2-incorrect, shell-3-incorrect
let result = ''; //correct or incorrect 

let flips = 0;
let wins = 0;
let losses = 0;

/* State */
const sides = [0,1,2,3,4,5];



/* Actions */
function loadPage() {
        displayGuess();
        //displayResults();
        displayScoreboard();
}


function flipShell(userGuess) {
    gameState = 'results'; 
    guess = userGuess;
    flip = getRandomItem(sides);
    flips++;
        if (guess === flip) {
            result = 'win';
            wins++;
        }
        else {
            result = 'lose';
            losses++;
        }
        loadPage();

        
    function playAgain() {
        gameState = 'guess';
        loadPage();
    }}



/* Components */
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay=  document.getElementById('losses-display');

function displayScoreboard() {
    
    winsDisplay.textContent = wins;
   lossesDisplay.textContent = flip + wins;
    totalDisplay.textContent = flip;

}
/* Component */
// get DOM
const flipShell1 = document.getElementById('flip-shell-1');
const flipShell2 = document.getElementById('flip-shell-2');
const flipShell3 = document.getElementById('flip-shell-3');


// display
function displayGuess() {
    flipShell1.classList.remove('win','lose','fade-out');
    flipShell2.classList.remove('win','lose','fade-out');
    flipShell3.classList.remove('win','lose','fade-out');
}

    if (gameState === 'results') {
         if (guess === flip) {
        flipShell1.classList.add(result);
        flipShell2.classList.add(result);
        flipShell3.classList.add(result);
    }

    else {
        flipShell1.classList.add(result);
        flipShell2.classList.add(result);
        flipShell3.classList.add(result);
    }};

        



       

// event listeners
flipShell1.addEventListener('click', () => {
        flipShell('flip-shell-1');
    });
flipShell2.addEventListener('click', () => {
        flipShell('flip-shell-2');
    });
flipShell3.addEventListener('click', () => {
        flipShell('flip-shell-3');
    });


//results
//const totalImage = document.getElementById('flip-image');
//const totalDisplay = document.getElementById('total-display');
const resultsSection = document.getElementById('results-section');
const playAgainButton = document.getElementById('play-again-button');

function displayResults() {
        if (gamestate === 'results') {
       resultsSection.classList.remove('fade-out');}
        else{
        }};

            
playAgainButton.addEventListener('click', () => {
        playAgain();

    });

/* Run page load code */
loadPage();
