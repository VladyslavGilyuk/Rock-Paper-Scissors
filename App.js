let userScore = 0;
let compScore = 0;

const userScoreCount = document.getElementById("userScore");
const compScoreCount = document.getElementById("compScore");
const result = document.getElementById('resultText');
const rock = document.getElementById("r")
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const userChoiceIcon = document.getElementById("user-choice-icon")
const compChoiceIcon = document.getElementById("comp-choice-icon")

/* Get random computer choice */
function getComputerChoice () {
  const computerChoiceArray = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
    return computerChoiceArray[randomNumber];
}

/*Win case*/
function win () {
  userScore++;
  userScoreCount.innerHTML = userScore;
  result.innerHTML = "WIN!";
  userChoiceIcon.classList.add("win-green");
    setTimeout(() => userChoiceIcon.classList.remove("win-green"), 1000)
  compChoiceIcon.classList.add("lose-red");
    setTimeout(() => compChoiceIcon.classList.remove("lose-red"), 1000)
}

/*Lose case*/
function lose () {
  compScore++;
  compScoreCount.innerHTML = compScore;
  result.innerHTML = "Lost";
  userChoiceIcon.classList.add("lose-red");
    setTimeout(() => userChoiceIcon.classList.remove("lose-red"), 1000)
  compChoiceIcon.classList.add("win-green");
    setTimeout(() => compChoiceIcon.classList.remove("win-green"), 1000)
}

/*Draw case*/
function draw () {
  result.innerHTML = "Draw";
  userChoiceIcon.classList.add("draw-gray");
    setTimeout(() => userChoiceIcon.classList.remove("draw-gray"), 1000)
  compChoiceIcon.classList.add("draw-gray");
    setTimeout(() => compChoiceIcon.classList.remove("draw-gray"), 1000)
}

/*Update the score and result secitions*/
function game (userChoice) {
  const compChoice = getComputerChoice();

  /*show user's choice as icon*/
  function showUserChoiceIcon () {
    if (userChoice === "p") {
      userChoiceIcon.src = "images/ChoiceIllustration/paper.png";
    } else if (userChoice === "r") {
        userChoiceIcon.src = "images/ChoiceIllustration/rock.png";
    } else {
        userChoiceIcon.src = "images/ChoiceIllustration/scissors.png";
    }
  }
  showUserChoiceIcon ();

  /*show comp's choice as icon*/
  function showCompChoiceIcon () {
    if (compChoice === "p") {
      compChoiceIcon.src = "images/ChoiceIllustration/paper.png";
    } else if (compChoice === "r") {
        compChoiceIcon.src = "images/ChoiceIllustration/rock.png";
    } else  {
        compChoiceIcon.src = "images/ChoiceIllustration/scissors.png";
    }
  }
  showCompChoiceIcon ();

  /*compare the choice of user and comp and call a corresponding func case*/
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
    break;
    case "sr":
    case "rp":
    case "ps":
      lose();
    break;
    case "ss":
    case "rr":
    case "pp":
      draw();
    break;
  }

  /*background-effect on user's choice onClick*/
  userChoicecolored = document.getElementById(userChoice);
  userChoicecolored.classList.add("user-choice-gray");
    setTimeout(() => userChoicecolored.classList.remove("user-choice-gray"), 100)
}

/*Reset the score*/
function resetCount () {
  userScoreCount.innerHTML = 0;
  compScoreCount.innerHTML = 0;
  userScore = 0;
  compScore = 0;
}

/*Start the game on user's click*/
function main () {
  rock.addEventListener("click", () => game ("r"))
  paper.addEventListener("click", () => game("p"))
  scissors.addEventListener("click", () => game("s"))
}

main()