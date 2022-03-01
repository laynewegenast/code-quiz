var timeEl = document.getElementById('timer');
var startButton = document.getElementById('start');

startButton.addEventListener('click', startQuiz)

function timer() {
    var remaining = 75;

    var timeInterval = setInterval (function(){
        if (remaining > 1) {
            timeEl.textContent = timeEl + ' seconds remaining';
            timeCount--;
        } else if (remaining === 1) {
            timeEl.textContent = timeEl + ' second remaining';
            timeLeft--;
        } else {
            timeEl.textContent = 'Times up!';
            clearInterval(timeInterval);

        }
    }, 1000);
};

function startQuiz() {
    startButton.classList.add('hide')
}

function nextQuestion() {

}

//timer();