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
var startButton = document.getElementById("start-button");

// ************ WRITE FUNCTIONS ************

// ***** TIMER *****
function startTimer() {
   var timerInterval = setInterval(function () {
      totalSeconds--;
      timerDiv.textContent = totalSeconds;

      if (totalSeconds === 0) {
         clearInterval(timerInterval);
         // need to put a 'game over' message here
      };
   }, 1000);
}

// ***** QUESTIONS/QUIZ *****
// ** PSEUDO CODE FOR QUESTIONS/QUIS **
/*
okay so i'm going to be loping through my questions object. it's going to hit the first loop, and you only get 15 seconds to answer the question, so some timer will have to start, it's going to pull the questions[i].title and place it in the div that contains the the questions, then it's going to create 4 buttons, and each button is going to contain a question questions[i].choices[1-4], per the GIF provided as an example, clicking a button take the user to the next question. if the answer is correct, give message for correct. if answer is wrong, give message for wrong and deduct 15 seconds from the timer. when last question is answered, display the score and store it (seperate code for all that)
*/

function questionOne() {
   questionOneText = questions[0].title;
   questionDiv.innerHTML = questionOneText;

   for (var j = 0; j < 4; j++) {
      var answerButton = document.createElement("div"); // creating global element
      answerButton.innerHTML = questions[0].choices[j]; // assigning text for that global element
      answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
      answerButton.setAttribute("data-userchoice", questions[0].choices[j]); // assigning attribute for data
      answerChoicesDiv.appendChild(answerButton); // adds the button to the page
   }

   $(".answer-button").on("click", function () {
      event.stopPropagation();

      var userChoice = ($(this).attr("data-userchoice"));
      if (userChoice === questions[0].answer) {
         rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
         answerChoicesDiv.innerHTML = "";
         questionTwo();
      } else {
         rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
         totalSeconds = totalSeconds - 15;
      }
   })

}

function questionTwo() {
   questionTwoText = questions[1].title;
   questionDiv.innerHTML = questionTwoText;

   for (var j = 0; j < 4; j++) {
      var answerButton = document.createElement("div"); // creating global element
      answerButton.innerHTML = questions[1].choices[j]; // assigning text for that global element
      answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
      answerButton.setAttribute("data-userchoice", questions[1].choices[j]); // assigning attribute for data
      answerChoicesDiv.appendChild(answerButton); // adds the button to the page

      $(".answer-button").on("click", function () {
         event.stopPropagation();

         var userChoice = ($(this).attr("data-userchoice"));
         if (userChoice === questions[1].answer) {
            rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
            answerChoicesDiv.innerHTML = "";
            questionThree();
         } else {
            rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
            totalSeconds = totalSeconds - 15;
         }
      })
   }
}

function questionThree() {
   questionThreeText = questions[2].title;
   questionDiv.innerHTML = questionThreeText;

   for (var j = 0; j < 4; j++) {
      var answerButton = document.createElement("div"); // creating global element
      answerButton.innerHTML = questions[2].choices[j]; // assigning text for that global element
      answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
      answerButton.setAttribute("data-userchoice", questions[2].choices[j]); // assigning attribute for data
      answerChoicesDiv.appendChild(answerButton); // adds the button to the page
   }

   $(".answer-button").on("click", function () {
      event.stopPropagation();

      var userChoice = ($(this).attr("data-userchoice"));
      if (userChoice === questions[2].answer) {
         rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
         answerChoicesDiv.innerHTML = "";
         questionFour();
      } else {
         rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
         totalSeconds = totalSeconds - 15;
      }
   })

}

function questionFour() {
   questionFourText = questions[3].title;
   questionDiv.innerHTML = questionFourText;

   for (var j = 0; j < 4; j++) {
      var answerButton = document.createElement("div"); // creating global element
      answerButton.innerHTML = questions[3].choices[j]; // assigning text for that global element
      answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
      answerButton.setAttribute("data-userchoice", questions[3].choices[j]); // assigning attribute for data
      answerChoicesDiv.appendChild(answerButton); // adds the button to the page
   }

   $(".answer-button").on("click", function () {
      event.stopPropagation();

      var userChoice = ($(this).attr("data-userchoice"));
      if (userChoice === questions[3].answer) {
         rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
         answerChoicesDiv.innerHTML = "";
         questionFive();
      } else {
         rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
         totalSeconds = totalSeconds - 15;
      }
   })

}

function questionFive() {
   questionFiveText = questions[4].title;
   questionDiv.innerHTML = questionFiveText;

   for (var j = 0; j < 4; j++) {
      var answerButton = document.createElement("div"); // creating global element
      answerButton.innerHTML = questions[4].choices[j]; // assigning text for that global element
      answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
      answerButton.setAttribute("data-userchoice", questions[4].choices[j]); // assigning attribute for data
      answerChoicesDiv.appendChild(answerButton); // adds the button to the page
   }

   $(".answer-button").on("click", function () {
      event.stopPropagation();

      var userChoice = ($(this).attr("data-userchoice"));
      if (userChoice === questions[4].answer) {
         rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
      } else {
         rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
         totalSeconds = totalSeconds - 15;
      }
   })

}



function quizTime() {
   questionOne();

   // for (var i = 0; i < (questions.length - 1); i++) {
   //    newQuestionText = questions[i].title;
   //    questionDiv.innerHTML = newQuestionText;
   //    console.log(questions[i]);

   //    for (var j = 0; j < 4; j++) {
   //       var answerButton = document.createElement("div"); // creating global element
   //       answerButton.innerHTML = questions[i].choices[j]; // assigning text for that global element
   //       answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
   //       answerButton.setAttribute("data-userchoice", questions[i].choices[j]); // assigning attribute for data
   //       answerChoicesDiv.appendChild(answerButton); // adds the button to the page
   //    }

   // var answerButtonClass = document.getElementsByClassName("answer-button");
   // console.log(answerButtonClass)

   // var answerButtonClasses = document.getElementsByClassName("answer-button");
   // console.log(answerButtonClasses)
   // answerButtonClasses.addEventListener("click", function () {



}




// ************ EVENT LISTENERS ************


// ***** EVENT LISTENER FOR START BUTTON *****
startButton.addEventListener("click", function () {
   event.stopPropagation();
   startTimer()
   quizTime()
});




// ************ RUN FUNCTION *********

