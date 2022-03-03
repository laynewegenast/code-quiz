var timeEl = document.getElementById('timer');
var startButton = document.getElementById('start');
var viewScores = document.getElementById('scores-btn');
var questionEl = document.getElementById('questions');

var userScore = 0
var optionButtons = document.querySelectorAll('.answer')
var currentQuestion = 0
//quiz timer starts when start button is clicked
function timer() {
    var remaining = 75;

    var timeInterval = setInterval(function () {
        if (remaining > 1) {
            timeEl.textContent = remaining + ' seconds remaining';
            remaining--;
        } else if (remaining === 1) {
            timeEl.textContent = remaining + ' second remaining';
            remaining--;
        } else {
            timeEl.textContent = 'Times up!';
            clearInterval(timeInterval);

        }
    }, 1000);
};

//when start button is clicked hide button show first question
function startQuiz() {
    console.log('start');
    startButton.classList.add('hidden')
    questionEl.classList.remove('hidden')
    timer()
    nextQuestion()
    //questionEl.classList.remove('hide')
};

//view highscores
function highScoresList() {

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
    document.getElementById('question').textContent = quizQuestions[currentQuestion].question

    var i = 0
    optionButtons.forEach(function (element) {
        element.textContent = quizQuestions[currentQuestion].answers[i]
        i++
    })
};

function checkAnswer() {
    
        var userChoice = this.textContent
        console.log('test', userChoice)
    
};



//startQuiz();

startButton.addEventListener('click', startQuiz)
viewScores.addEventListener('click', highScoresList)
document.getElementById('option1').addEventListener('click', checkAnswer)
document.getElementById('option2').addEventListener('click', checkAnswer)
document.getElementById('option3').addEventListener('click', checkAnswer)
document.getElementById('option4').addEventListener('click', checkAnswer)