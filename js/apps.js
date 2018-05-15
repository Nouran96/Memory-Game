const startScreen = document.querySelector('.start-screen'),
    startBtn = document.querySelector('#play');

startBtn.addEventListener('click', function() {
    startScreen.classList.add('hidden');
});