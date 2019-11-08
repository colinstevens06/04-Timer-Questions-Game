// create a timer
// that timer is also going to have to correlate to the score
// so when the last question is answered, the timer should stop and the time left on the timer should retun value to the score
// when someone gets an answer wrong - going to have to be like true/false statements for the questions, returning true/false to a variable, maybe that variable is 'answer question 1' etc ... and if the value is true you just move to the next question and get a <hr> w correct promp. if answer returns false, the timer has to immediately go down by 15 seconds
// after answering the questions, the timer stops, and that value is returned to 'score'
// then the user enters initials, clicks submit button, and name/score are stored in the high scores section
// the high scores section is going to append the score and resort so that the highest score is on top, so it probably appends to an object, that object is sorted based on the score key, and then it's actually displayed


// ************ DECLARE VARIABLES HERE *************
var score;
var timeLeft;
var interval;
var totalSeconds = 75;

var timerDiv = document.getElementById("timer");
var questionBoxDiv = document.getElementById("question-box");
var questionDiv = document.getElementById("question");
var answerChoicesDiv = document.getElementById("answer-choices");
var rightOrWrongDiv = document.getElementById("right-or-wrong");
var startButton =  document.getElementById("start-button");




// ************ WRITE FUNCTIONS *************

// ***** TIMER *****

function startTimer() {
   var timerInterval = setInterval(function () {
      totalSeconds--;
      timerDiv.textContent = totalSeconds;
      
      if (totalSeconds === 0) {
         clearInterval(timerInterval);
         alert("Game Over")
         // need to put a 'game over' message here
      };
   }, 1000);
}

// ***** EVENT LISTENER FOR START BUTTON *****
startButton.addEventListener("click", startTimer); 

 


// ************ RUN FUNCTION *********

console.log("hi")