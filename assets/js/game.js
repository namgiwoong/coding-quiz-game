// Declare "count down"  numbers
var timerCount;
var timer;
var timeInterval;
// declare "questions"
var questionPosition = 0;
// declare "score"
var playerScore = 0;

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
  // set the player score to 0
  playerScore = 0;

  // set the starting value of "countdown"
  timerCount = 20;
  startTimer();
}

// start the timer "startTimer"
function startTimer() {
  timeInterval = setInterval(function () {
    timerCount--;
    timeEl.textContent = timerCount;
    if (timerCount <= 0) {
      //clear time interval to stop it from running
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
}

var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

// Function "answerQuestion"
function answerQuestion(e) {
  // check if the selected answer is correct
  var currentQuestion = questions[questionPosition];
  var playerAnswer = e.target.textContent;
  var questionAnswer = currentQuestion.correctAnswer;

  console.log(e.target.textContent);

  // Display the next question
  if (playerAnswer === questionAnswer) {
    console.log(true);
    // add 10 each time player gets the question right
    playerScore += 10;
    console.log(playerScore);
  }
  // IF the answer is wrong
  // THEN we need to subtract from "countdown"
  else {
    console.log(false);
    timerCount = timerCount - 5;
  }
  //end game if player answers all the question
  if (questionPosition === 2) {
    endGame();
  } else {
    questionPosition++;
    displayQuestion();
  }
}

//Function "endGame"
function endGame() {
  clearInterval(timeInterval);
  hideQuestion();
}

//hide question area
function hideQuestion() {
  var quizBox = document.querySelector("#quiz-box");
  quizBox.classList.add("hidden");
  //show the record high score
  var inputName = document.querySelector("#finish");
  inputName.classList.remove("hidden");
}

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
    // console.log(element);

    const btnid = document.querySelector("#btn-" + index);

    btnid.textContent = element;

    // clicking the buttons for answers
    btnid.addEventListener("click", answerQuestion);
  }
}
displayQuestion();

//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// track score?
