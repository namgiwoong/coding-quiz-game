// Declare "count down"  numbers
var timerCount;
var timer;
// declare "questions"
var questionPosition = 0;
var questions = [
  {
    question: "Question 1",
    answers: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: "answer A",
  },
  {
    question: "Question 2",
    answers: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: "answer B",
  },
];

var currentQuestion = questions[questionPosition];
//Declare the "timeInterval"
//Declare the "timeEl"
var timeEl = document.querySelector("#timer");

//Function "startGame"
function startQuiz() {
  console.log("started");
  // hide the start screen
  var removeEl = document.querySelector("#container");
  removeEl.remove("hidden");

  // set the question position to 0
  questionPosition = 0;

  // display the current question
  for (i = 0; i < questions.length; i++) {
    correctAnswer = [];
  }
  // set the starting value of "countdown"
  timerCount = 20;
  startTimer();
}

// start the timer "startTimer"
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timeEl.textContent = timerCount;
    if (countdown === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);
// Function "answerQuestion"
// var currentQuestion = questions[questionPosition];
// check if the selected answer is correct
// IF the answer is wrong
// THEN we need to subtract from "countdown"

//Display the next question
// questionPosition++;
// displayCurrentQuestion();
//IF I've passed the last question THEN "endGame() ELSE displayCurrentQuestion()"

//Function "displayCurrentQuestion"- ref- web apis day 2
// var currentQuestion = questions[questionPosition];

//Function "endGame"
// function endGame(){
//     clearInterval(timeInterval);
// }
//hide question area
//show the record high score
//clear time interval to stop it from running

//Function "recordTheHighscore"- ref-web api day 3
