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
var highScoresButton = document.getElementById("high-scores")
var highScoresContainer = document.getElementById("high-score-container")
var highScoresHeaderDiv = document.getElementById('high-scores-header')
var highScoresListDiv = document.getElementById('high-scores-list')
var mainMenuButton = document.getElementById("main-menu")

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

highScoresButton.addEventListener("click", highScoreClick)
startButton.addEventListener("click", generateQuestion);
startButton.addEventListener("click", startTimer);
mainMenuButton.addEventListener("click", goToMainMenu);

function generateQuestion() {
   event.preventDefault();

   questionDiv.innerHTML = "";

   if (currentQuestion === questions.length) {
      clearInterval(timerInterval);
      score = totalSeconds;
      finalScore();
      return;
   }

   questionTitle.textContent = questions[currentQuestion].title;
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
   highScoreForm.style.display = 'none';
   questionDiv.style.display = "block";
   answerChoicesDiv.style.display = "block";

}

// ***** FINAL SCORE FUNCTION *****
function finalScore() {
   rightOrWrongDiv.innerHTML = "";
   questionDiv.innerHTML = "All done!";
   answerChoicesDiv.innerHTML = "Your final score is " + score;
   highScoreForm.style.display = "block"
}

// ***** MAIN MENU FUNCTION *****

function goToMainMenu() {
   event.preventDefault();
   highScoresContainer.style.display = "none";
   startScreenDiv.style.display = "block";
   questionDiv.style.display = "none";
   answerChoicesDiv.style.display = "none";
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

   highScoresHeaderDiv.innerHTML = "High Scores";
   for (var i = 0; i < highScoresObject.length; i++) {
      var highScoreText = document.createElement("div");
      highScoreText.textContent = highScoresObject[i];
      highScoresListDiv.appendChild(highScoreText);

   }
}

function storedHighScores() {
   // Stringify and set "highScores" key in localStorage to array
   localStorage.setItem("highScoresObject", JSON.stringify(highScoresObject));
}

submitButton.addEventListener("click", function (event) {
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

function highScoreClick() {
   event.preventDefault();
   highScoresContainer.style.display = "block";
   startScreenDiv.style.display = "none";
   questionDiv.style.display = "none";
   answerChoicesDiv.style.display = "none";
   highScoreForm.style.display = 'none';


}