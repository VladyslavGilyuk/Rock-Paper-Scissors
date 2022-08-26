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

function getComputerChoice () {
    const computerChoiceArray = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * computerChoiceArray.length);
    return computerChoiceArray[randomNumber];
}

function getProperName(name) {
    if (name === "r") {
        return "Rock"
    }
    else if (name === "p") {
        return "Paper"
    } else { return "Scissors"}
}
function win (userChoice, compChoice) {
    userScore++;
    userScoreCount.innerHTML = userScore;
   result.innerHTML = "WIN!";
   userChoiceIcon.classList.add("win-green");
   setTimeout(() => userChoiceIcon.classList.remove("win-green"), 1000)
   compChoiceIcon.classList.add("lose-red");
   setTimeout(() => compChoiceIcon.classList.remove("lose-red"), 1000)
}
function lose (userChoice, compChoice) {
    userColorResult = document.getElementById(userChoice);
    compScore++;
    compScoreCount.innerHTML = compScore;
   result.innerHTML = "Lost";
   userChoiceIcon.classList.add("lose-red");
   setTimeout(() => userChoiceIcon.classList.remove("lose-red"), 1000)
   compChoiceIcon.classList.add("win-green");
   setTimeout(() => compChoiceIcon.classList.remove("win-green"), 1000)
}
function draw (userChoice, compChoice) {
    userColorResult = document.getElementById(userChoice);
   result.innerHTML = "Draw";
   userChoiceIcon.classList.add("draw-gray");
   setTimeout(() => userChoiceIcon.classList.remove("draw-gray"), 1000)
   compChoiceIcon.classList.add("draw-gray");
   setTimeout(() => compChoiceIcon.classList.remove("draw-gray"), 1000)
}

function game (userChoice) {
    const compChoice = getComputerChoice();

    function showUserChoiceIcon () {
        if (userChoice === "p") {
            userChoiceIcon.src = "images/ChoiceIllustration/paper.png";
        } else if (userChoice === "r") {
            userChoiceIcon.src = "images/ChoiceIllustration/rock.png";
        } else  {
            userChoiceIcon.src = "images/ChoiceIllustration/scissors.png";
        }
    }
    showUserChoiceIcon ();

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
    
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, compChoice);
         break;
        case "sr":
        case "rp":
        case "ps":
        lose(userChoice, compChoice);
         break;
        case "ss":
        case "rr":
        case "pp":
         draw(userChoice, compChoice);
        break;
        }

        userChoicecolored = document.getElementById(userChoice);
        setTimeout(() => userChoicecolored.classList.remove("user-choice-gray"), 1000)
        userChoicecolored.classList.add("user-choice-gray");
        setTimeout(() => userChoicecolored.classList.remove("user-choice-gray"), 1000)
}
function main () {
    rock.addEventListener("click", () => game ("r"))
    paper.addEventListener("click", () => game("p"))
    scissors.addEventListener("click", () => game("s"))
}
main()