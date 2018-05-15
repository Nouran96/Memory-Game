function timerCount() {
    sec++;
    timer.textContent = sec;
    return sec;
}

const startScreen = document.querySelector('.start-screen'),
    startBtn = document.querySelector('#play'),
    timerDiv = document.querySelector('.timerDiv'),
    timer = document.querySelector('#timer');

let sec = 0;

startBtn.addEventListener('click', function() {
    let interval;
    startScreen.classList.add('hidden');
    interval = setInterval(timerCount, 1000);
});

