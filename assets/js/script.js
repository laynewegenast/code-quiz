var timeEl = document.getElementById('timer');

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

timer;