var timeEl = document.getElementById('timer');
var startButton = document.getElementById('start');
var viewScores = document.getElementById('scores-btn');
var questionEl = document.getElementById('questions');
var saveScore = document.getElementById('save-score');
var userInfo = document.querySelector('#user-info');

var userScore = 0
var optionButtons = document.querySelectorAll('.answer')
var currentQuestion = 0
var remaining = 75;
var timeInterval;

//quiz timer starts when start button is clicked
function timer() {
     timeInterval = setInterval(function () {
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
    startButton.classList.add('hidden')
    questionEl.classList.remove('hidden')
    timer()
    nextQuestion()
};

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
        console.log(userChoice)
    if ( userChoice == quizQuestions[currentQuestion].correctOption) {
        userScore += 10
        document.getElementById('correct-answer').textContent = 'Correct! Score: ' + userScore 
    } else {
        document.getElementById('correct-answer').textContent = 'Wrong! Score: ' + userScore
        remaining -= 10
    }
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++ 
        nextQuestion()
    } else {
        questionEl.classList.add('hidden')
        document.getElementById('score-input').classList.remove('hidden')
        clearInterval(timeInterval);
        document.getElementById('display-score').textContent = 'Current Score ' + (userScore + remaining)
        timeEl.classList.add('hidden')
        viewScores.classList.add('hidden')
    }
};

//view highscores stored in local storage
function highScoresList() {
    // var 
};


saveScore.addEventListener('click', function(event) {
    event.preventDefault();
    var user = { 
    initials: userInfo.value.trim()
    };
    

    localStorage.setItem("user", JSON.stringify(user));

    //storeHighScoreList();
    //showScoreList();
});


//show list of high scores that have been stored on final page
function showScoreList() {
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
};


startButton.addEventListener('click', startQuiz)
viewScores.addEventListener('click', highScoresList)
document.getElementById('option1').addEventListener('click', checkAnswer)
document.getElementById('option2').addEventListener('click', checkAnswer)
document.getElementById('option3').addEventListener('click', checkAnswer)
document.getElementById('option4').addEventListener('click', checkAnswer)
