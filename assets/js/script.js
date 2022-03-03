var timeEl = document.getElementById('timer');
var startButton = document.getElementById('start');
var viewScores = document.getElementById('scores-btn');
var questionEl = document.getElementById('questions');

startButton.addEventListener('click', startQuiz)
viewScores.addEventListener('click', highScoresList)

//quiz timer starts when start button is clicked
function timer() {
    var remaining = 75;

    var timeInterval = setInterval (function (){
        if (remaining > 1) {
            timeEl.textContent = remaining + ' seconds remaining';
            timeCount--;
        } else if (remaining === 1) {
            timeEl.textContent = remaining + ' second remaining';
            timeLeft--;
        } else {
            timeEl.textContent = 'Times up!';
            clearInterval(timeInterval);

        }
    }, 1000);
};

//when start button is clicked hide button show first question
function startQuiz() {
    console.log('start');
    startButton.classList.add('hide')
    //questionEl.classList.remove('hide')
};

//view highscores
function highScoresList() {
    console.log('scores')
};

//store highscores in local storage


//quesiton arrays
var quizQuestions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hypertext Math Lesson", 
            "Hypertext Markup Language", 
            "Happy Time Messy Language", 
            "Hypermarkup Text Language"],
        correctOption: "Hypertext Markup Language"
    },

    {
        question: "Which is an example of a Third Party API?",
        answers: [
            "jQuery", 
            "Bootstrap", 
            "Moment.js", 
            "all of the above"],
        correctOption: "all of the above"
    },

    {
        question: "Which of the following is an example of an Event Listener?",
        answers: [
            "click", 
            "hello", 
            "goodbye", 
            "all of the above"],
        correctOption: "click"
    },
];

function nextQuestion() {

};

//startQuiz();
//timer();