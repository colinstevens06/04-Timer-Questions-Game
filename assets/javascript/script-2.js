// create a timer
// that timer is also going to have to correlate to the score
// so when the last question is answered, the timer should stop and the time left on the timer should retun value to the score
// when someone gets an answer wrong - going to have to be like true/false statements for the questions, returning true/false to a variable, maybe that variable is 'answer question 1' etc ... and if the value is true you just move to the next question and get a <hr> w correct promp. if answer returns false, the timer has to immediately go down by 15 seconds
// after answering the questions, the timer stops, and that value is returned to 'score'
// then the user enters initials, clicks submit button, and name/score are stored in the high scores section
// the high scores section is going to append the score and resort so that the highest score is on top, so it probably appends to an object, that object is sorted based on the score key, and then it's actually displayed


// ************ DECLARE VARIABLES HERE *************
var score = "";
var timeLeft;
var interval;
var highScoresObject = [];
var totalSeconds = 75;
var thisHighScore = "";

var timerDiv = document.getElementById("timer");
var questionBoxDiv = document.getElementById("question-box");
var questionDiv = document.getElementById("question");
var answerChoicesDiv = document.getElementById("answer-choices");
var rightOrWrongDiv = document.getElementById("right-or-wrong");
var startButton = document.getElementById("start-button");
var highScoreForm = document.getElementById("high-score-form");
var submitButton = document.getElementById("submit-button");
var timerInterval;
var initialsValue = "";


// ************ WRITE FUNCTIONS ************

// ***** TIMER *****
function startTimer() {
   timerInterval = setInterval(function () {
      totalSeconds--;
      timerDiv.textContent = "Time left: " + totalSeconds;

      if (totalSeconds === 0) {
         clearInterval(timerInterval);
         // need to put a 'game over' message here
      };
   }, 1000);
}

highScores();

// ***** QUESTIONS/QUIZ *****
// ** PSEUDO CODE FOR QUESTIONS/QUIS **
/*
okay so i'm going to be loping through my questions object. it's going to hit the first loop, and you only get 15 seconds to answer the question, so some timer will have to start, it's going to pull the questions[i].title and place it in the div that contains the the questions, then it's going to create 4 buttons, and each button is going to contain a question questions[i].choices[1-4], per the GIF provided as an example, clicking a button take the user to the next question. if the answer is correct, give message for correct. if answer is wrong, give message for wrong and deduct 15 seconds from the timer. when last question is answered, display the score and store it (seperate code for all that)
*/



function questionOne() {
   answerChoicesDiv.innerHTML = "";
   questionOneText = questions[0].title;
   questionDiv.innerHTML = questionOneText;

   for (var j = 0; j < 4; j++) {
      var answerButton = document.createElement("div"); // creating global element
      answerButton.innerHTML = questions[0].choices[j]; // assigning text for that global element
      answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
      answerButton.setAttribute("data-userchoice", questions[0].choices[j]); // assigning attribute for data
      answerChoicesDiv.appendChild(answerButton); // adds the button to the page
   }

   var answerButtonArray = document.querySelectorAll(".answer-button") // this creates an array
   answerButtonArray.forEach(buttonClick)

   function buttonClick(item) {
      item.addEventListener("click", function () {
         event.stopPropagation();

         var userChoice = this.getAttribute("data-userchoice")

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

   }

   var answerButtonArray = document.querySelectorAll(".answer-button") // this creates an array
   answerButtonArray.forEach(buttonClick)

   function buttonClick(item) {
      item.addEventListener("click", function () {
         event.stopPropagation();

         var userChoice = this.getAttribute("data-userchoice")

         if (userChoice === questions[1].answer) {
            rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
            answerChoicesDiv.innerHTML = "";
            questionThree();
         } else {
            console.log('wrong');
            rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
            console.log(totalSeconds)
            totalSeconds = totalSeconds - 15;
            console.log(totalSeconds)
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

   var answerButtonArray = document.querySelectorAll(".answer-button") // this creates an array
   answerButtonArray.forEach(buttonClick)

   function buttonClick(item) {
      item.addEventListener("click", function () {
         event.stopPropagation();

         var userChoice = this.getAttribute("data-userchoice")

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
   var answerButtonArray = document.querySelectorAll(".answer-button") // this creates an array
   answerButtonArray.forEach(buttonClick)

   function buttonClick(item) {
      item.addEventListener("click", function () {
         event.stopPropagation();

         var userChoice = this.getAttribute("data-userchoice")

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
   var answerButtonArray = document.querySelectorAll(".answer-button") // this creates an array
   answerButtonArray.forEach(buttonClick)

   function buttonClick(item) {
      item.addEventListener("click", function () {
         event.stopPropagation();

         var userChoice = this.getAttribute("data-userchoice")

         if (userChoice === questions[4].answer) {
            rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
            clearInterval(timerInterval);
            score = totalSeconds;
            answerChoicesDiv.innerHTML = "";

            // run 'finalScore() function that you'll create next
            finalScore();
         } else {
            rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
            totalSeconds = totalSeconds - 15;
         }
      })
   }

}

function finalScore() {
   rightOrWrongDiv.innerHTML = "";
   questionDiv.innerHTML = "All done!";
   answerChoicesDiv.innerHTML = "Your final score is " + score;
   highScoreForm.setAttribute("class", "block")

      // initialsValue = document.getElementById("initials").value;
      // console.log(initialsValue);

      // storeHighScores();

      // function storeHighScores() {
      //    var initialsParse = [];
      //    var initialsParse = JSON.parse(localStorage.getItem("initials"));
      //    initialsParse.push(initialsValue);
      //    localStorage.setItem("initials", JSON.stringify(initialsParse));
      
      //    var scoreValueLocal = initialsValue
      //    var scoreParse = JSON.parse(localStorage.getItem("score")) || [];
      //    scoreParse.push(scoreValueLocal);
      //    localStorage.setItem("score", JSON.stringify(scoreParse));
      
      // }

      // localStorage.setItem("initials", initialsValue);
      // localStorage.setItem("score", score);


   
   // storing it locally
   // localStorage.setItem("initals", 

}



// function renderHighScores() {
//    // questionDiv.innerHTML = "High Scores"; this line will populate the h1 but right now i'm concerned with displayed local data

//    answerChoicesDiv.innerHTML = "";


//    for (var i = 0; i < highScoresObject.length; i++) {

//       var highScoreInitials = highScoresObject[i]; // equivilant of var todo = todos[i];
//       var highScoreNumber = score;

//       var highScoreText = document.createElement("div");
//       highScoreText.textContent = highScoreInitials + ": " + highScoreNumber;

//       answerChoicesDiv.appendChild(highScoreText);

//    }

// }

function highScores() {
   // Get stored high scores from localStorage
   // Parsing the JSON string to an object
   var storedScores = JSON.parse(localStorage.getItem("highScoresObject"));

   // if scores were retrieved from locale storeage, update the array to it
   if (storedScores !== null) {
      highScoresObject = storedScores;
   }

   // renderHighScores()

}

function storedHighScores() {
   // Stringify and set "highScores" key in localStorage to array
   localStorage.setItem("highScoresObject", JSON.stringify(highScoresObject));
}



submitButton.addEventListener("click", function(event) {
   event.preventDefault();

   var initialsValue = document.getElementById("initials").value.trim();

   thisHighScore = initialsValue + ": " + score;
   console.log(thisHighScore);


   if (thisHighScore === "") {
      return;
   }

highScoresObject.push(thisHighScore);
console.log(thisHighScore)
console.log(highScoresObject)


   // store updated todos in localstorage re-render the list
   storedHighScores();
   highScores();

   console.log(highScores)
   // renderHighScores();

})






// ************ EVENT LISTENERS ************


// ***** EVENT LISTENER FOR START BUTTON *****
startButton.addEventListener("click", function () {
   event.stopPropagation();

   startTimer()
   questionOne()

});




// ************ RUN FUNCTION *********

