// Functions

// Increasing the timer by one second each second
function timerCount() {
    sec++;
    timer.textContent = sec;
    return sec;
}

function revealCard(card) {
    card.classList.toggle('transform');
    cardsClass.push(card.classList[1]);
    cardsShown.push(card);

    if(cardsClass.length === 2){
        compareCards();
    }
}

function compareCards() {
        if (cardsClass[0] === cardsClass[1]) {
        }
        else {
            cardsShown.forEach(function (card) {
                card.querySelector('.back').style.backgroundColor = 'black';
                card.classList.toggle('transform');
            });
        }
        cardsClass = [];
        cardsShown = [];
}

// Global Declarations
const startScreen = document.querySelector('.start-screen'),
    startBtn = document.querySelector('#play'),
    timerDiv = document.querySelector('.timerDiv'),
    timer = document.querySelector('#timer'),
    cards = document.querySelectorAll('.card');

let sec = 0,
    cardsClass = [],
    cardsShown = [];

// Adding a click event for the start button to remove screen and start timer
startBtn.addEventListener('click', function() {
    let interval;
    startScreen.classList.add('hidden');
    interval = setInterval(timerCount, 1000);
});

// Adding a click event for every card to reveal its content
for(let card of cards){
    card.addEventListener('click', function() {
        revealCard(card);
    });
}

