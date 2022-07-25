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
  {
    question: "Question 3",
    answers: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: "answer C",
  },
];

var currentQuestion = questions[questionPosition];

//Declare the "timeInterval"
//Declare the "timeEl"
var timeEl = document.querySelector("#timer");

//Function "startGame"
function startQuiz() {
  var removeEl = document.querySelector("#container");
  var quizBox = document.querySelector("#quiz-box");

  console.log("started");

  // hide the start screen
  removeEl.remove("hidden");

  // removing class from div to display questions
  quizBox.classList.remove("hidden");

  // set the question position to 0
  questionPosition = 0;

  // set the starting value of "countdown"
  timerCount = 20;
  startTimer();
}

// start the timer "startTimer"
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timeEl.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

// Function "answerQuestion"
function answerQuestion() {
  // check if the selected answer is correct
  var currentQuestion = questions[questionPosition];
  var playerAnswer = currentQuestion.answers;
  var questionAnswer = currentQuestion.correctAnswer;

  if (playerAnswer === questionAnswer) {
    // Display the next question
    questionPosition++;
  }
  // IF the answer is wrong
  else if (playerAnswer !== questionAnswer) {
    // THEN we need to subtract from "countdown"
    questionPosition++;
  }
}

//IF I've passed the last question THEN "endGame() ELSE displayCurrentQuestion()"

//Function "endGame"
// function endGame(){
//     clearInterval(timeInterval);
// }
//hide question area
//show the record high score
//clear time interval to stop it from running

//Function "recordTheHighscore"- ref-web api day 3

function displayQuestion() {
  var quizBox = document.querySelector("#questionsContent");
  var currentQuestion = questions[questionPosition];

  var questionText = currentQuestion.question;

  // get the text of the current question
  quizBox.textContent = questionText;

  var answers = currentQuestion.answers;

  // for (i = 0; i < answers.length; i++) {
  //   console.log(answers[i]);

  for (let index = 0; index < answers.length; index++) {
    const element = answers[index];
    console.log(element);

    const btnid = document.querySelector("#btn-" + index);

    btnid.textContent = element;

    // clicking the buttons for answers
    btnid.addEventListener("click", answerQuestion);
  }
}
displayQuestion();

//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
