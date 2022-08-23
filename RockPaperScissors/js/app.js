let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv= document.getElementById('.score-board');
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function win(userChoice,computerChoice){
    const userChoiceDiv = document.getElementById(userChoice);
    userScore ++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = userChoice + " beats " +computerChoice+". You win!";
    userChoiceDiv.classList.add('green-glow');
    setTimeout(()=> userChoiceDiv.classList.remove('green-glow'),1000)
}

function lose(userChoice,computerChoice){
    const userChoiceDiv = document.getElementById(userChoice);
    computerScore ++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = userChoice + " loses to " +computerChoice+". You lose...";
    userChoiceDiv.classList.add('red-glow');
    setTimeout(()=>userChoiceDiv.classList.remove('red-glow'),1000)
}

function draw(userChoice,computerChoice){
    const userChoiceDiv = document.getElementById(userChoice);
    resultP.innerHTML = userChoice + " equals " +computerChoice+". its a draw...";
    userChoiceDiv.classList.add('gray-glow');
    setTimeout(()=> userChoiceDiv.classList.remove('gray-glow'),1000)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice,computerChoice);
            break;
    }
}


function main(){
 rockDiv.addEventListener('click',()=> game('rock'));

paperDiv.addEventListener('click',()=> game("paper"));

scissorsDiv.addEventListener('click',()=> game("scissors"))
}
main();



