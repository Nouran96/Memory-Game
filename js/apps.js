/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Increasing the timer by one second each second
function timerCount() {
    sec++;
    timer.textContent = sec;
    return sec;
}

// Adding Shuffles Cards to deck
function arrangeCards(array) {
    const docFragment = document.createDocumentFragment();
    array.forEach(element => {
        docFragment.appendChild(element);
    });
    cardsContainer.appendChild(docFragment);
}

// Rotating the cards to reveal the images
function revealCard(card) {
    card.classList.add('open');
}

// See if the cards match and if they don't rotate them back
function matchCards(card) {
    openCards.push(card);
    if(openCards.length === 2){
        if(openCards[0].classList.contains(openCards[1].classList[1])){
            keepOpen(openCards);
        }
        else{
            setTimeout(function() {
                openCards.forEach(card => {
                    card.classList.remove('open');
                })
                openCards = [];
            }, 500);
        }
        countMoves();
    }
}

// If the cards match keep them open
function keepOpen(array) {
    array.forEach(card => {
        card.removeEventListener('click', revealCard);
        card.classList.add('match');
    });
    openCards = [];
}

function countMoves() {
    moves.textContent = movesCounter;
    movesCounter++;
    if(movesCounter === 20){
        // Two stars Rating
    }
    else if (movesCounter === 25){
        // One star Rating
    }
}

// Global Declarations
const startScreen = document.querySelector('.start-screen'),
    startBtn = document.querySelector('#play'),
    timerDiv = document.querySelector('.timerDiv'),
    timer = document.querySelector('#timer'),
    cards = document.querySelectorAll('.card'),
    cardsContainer = document.querySelector('.cards-container'),
    moves = document.querySelector('.counter');

let sec = 0,
    cardsClass = [],
    openCards = [],
    movesCounter = 1;

// Adding a click event for the start button to remove screen and start timer
startBtn.addEventListener('click', function() {
    let interval;
    startScreen.classList.add('hidden');
    interval = setInterval(timerCount, 1000);
    shuffle(cardsClass);
    arrangeCards(cardsClass);
});

// Adding a click event for every card to reveal its content
for(let card of cards){
    // cardsClass.push(card.classList[1]);
    cardsClass.push(card);
    card.addEventListener('click', function() {
        revealCard(card);
        matchCards(card);
    });
}



