var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Jack",
    score: 3,
  },

  {
    name: "Jill",
    score: 2,
  },
]

var questions = [{
  question: "What is the orange part of an egg called?",
  answer: "yolk"
}, {
  question: "What is the closest planet to the Sun?",
  answer: "mercury"
},
{
  question: "How many days are there in a year?",
  answer: "365"
}, {
  question: "Which is faster, light or sound?",
  answer: "light"
}, {
  question: "How many Continents are there?",
  answer: "7"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + "Let's check your general knowledge");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Congrats! Right Answer", score);

  console.log("Check out the high scores:");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


