var currentQuestion = 0;
var score = "";
var timeLeft;
var interval;
var highScoresObject = [];
var totalSeconds = 75;
var thisHighScore = "";

var startButton = document.getElementById("start-button")
var timerDiv = document.getElementById("timer")
var startScreenDiv = document.getElementById("startScreen")
var questionDiv = document.getElementById("question-box")
var answerChoicesDiv = document.getElementById("answer-box")
var questionTitle = document.createElement("h1");
var rightOrWrongDiv = document.getElementById("right-or-wrong")
var highScoreForm = document.getElementById("high-score-form")
var submitButton = document.getElementById("submit-button")

highScores();

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

startButton.addEventListener("click", generateQuestion);
startButton.addEventListener("click", startTimer);

function generateQuestion() {

   questionDiv.innerHTML = "";

   if (currentQuestion === questions.length) {
      clearInterval(timerInterval);
      score = totalSeconds;
      finalScore();
      return;
   }

   console.log(questions[currentQuestion].title)
   questionTitle.textContent = questions[currentQuestion].title;
   console.log(questionTitle)

   questionDiv.appendChild(questionTitle);

   for (var j = 0; j < 4; j++) {
      var answerButton = document.createElement("div"); // creating global element
      answerButton.innerHTML = questions[currentQuestion].choices[j]; // assigning text for that global element
      answerButton.setAttribute("class", "answer-button btn btn-secondary mr-3 mb-2"); // assigning class to this global element
      answerButton.setAttribute("data-userchoice", questions[currentQuestion].choices[j]); // assigning attribute for data
      answerChoicesDiv.appendChild(answerButton); // adds the button to the page
   }

   var answerButtonArray = document.querySelectorAll(".answer-button") // this creates an array
   answerButtonArray.forEach(buttonClick)

   function buttonClick(item) {
      item.addEventListener("click", function () {
         event.stopPropagation();

         var userChoice = this.getAttribute("data-userchoice")

         if (userChoice === questions[currentQuestion].answer) {
            rightOrWrongDiv.innerHTML = "<hr><p>Correct</p>";
            answerChoicesDiv.innerHTML = "";
            currentQuestion += 1;
            generateQuestion();
         } else if (totalSeconds <= 15) {
            totalSeconds = 0;
            clearInterval(timerInterval);
         } else {
            rightOrWrongDiv.innerHTML = "<hr><p>Wrong</p>";
            totalSeconds = totalSeconds - 15;
         }

      })
   }

   startScreenDiv.style.display = "none";
   questionDiv.style.display = "block";
   answerChoicesDiv.style.display = "block";

}

// ***** FINAL SCORE FUNCTION
function finalScore() {
   rightOrWrongDiv.innerHTML = "";
   questionDiv.innerHTML = "All done!";
   answerChoicesDiv.innerHTML = "Your final score is " + score;
   highScoreForm.setAttribute("class", "block")
}

// ************ STORING DATA LOCALLY HERE ************
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