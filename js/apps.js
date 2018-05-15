// Functions

// Increasing the timer by one second each second
function timerCount() {
    sec++;
    timer.textContent = sec;
    return sec;
}

function revealCard(card) {
    card.style.transform = 'rotateY(180deg)';
}

// Global Declarations
const startScreen = document.querySelector('.start-screen'),
    startBtn = document.querySelector('#play'),
    timerDiv = document.querySelector('.timerDiv'),
    timer = document.querySelector('#timer'),
    cards = document.querySelectorAll('.card');

let sec = 0;

// Adding a click event for the start button to remove screen and start timer
startBtn.addEventListener('click', function() {
    let interval;
    startScreen.classList.add('hidden');
    interval = setInterval(timerCount, 1000);
});

for(let card of cards){
    card.addEventListener('click', function() {
        revealCard(card);
    });
}

