let userScore = 0;
let compScore = 0;

const userScoreCount = document.getElementById("userScore");
const compScoreCount = document.getElementById("compScore");
const result = document.querySelector('.result > p');
const rock = document.getElementById("r")
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

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
    userColorResult = document.getElementById(userChoice);
    userScore++;
    userScoreCount.innerHTML = userScore;
   result.innerHTML = `${getProperName(userChoice)}(user) beats ${getProperName(compChoice)}(comp). You win!`;
   userColorResult.classList.add("win-green");
   setTimeout(() => userColorResult.classList.remove("win-green"), 300)
}
function lose (userChoice, compChoice) {
    userColorResult = document.getElementById(userChoice);
    compScore++;
    compScoreCount.innerHTML = compScore;
   result.innerHTML = `${getProperName(userChoice)}(user) lose to ${getProperName(compChoice)}(comp). You lost!`;
   userColorResult.classList.add("lose-red");
   setTimeout(() => userColorResult.classList.remove("lose-red"), 300)
}
function draw (userChoice, compChoice) {
    userColorResult = document.getElementById(userChoice);
   result.innerHTML = `${getProperName(userChoice)}(user) equals ${getProperName(compChoice)}(comp). It's a draw!`;
   userColorResult.classList.add("draw-gray");
   setTimeout(() => userColorResult.classList.remove("draw-gray"), 300)
}

function game (userChoice) {
    const compChoice = getComputerChoice();
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
}
function main () {
    rock.addEventListener("click", () => game ("r"))
    paper.addEventListener("click", () => game("p"))
    scissors.addEventListener("click", () => game("s"))
}
main()