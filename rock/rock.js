const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection');
const text = document.getElementById('result');
let generalComputerScore = 1;
let generalPlayerScore = 1;
const allOptions = ["rock", "paper", "scissors"];


function tie(){
     text.style.color = 'darkgray';
     return text.innerHTML = "It's a Tie :|";
}

function win(){
     text.style.color = 'darkgreen';
     return text.innerHTML = "You won :)";
}

function lose(){
     text.style.color = 'darkred';
     return text.innerHTML = "You lost :(";
}


function game(){
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
           let clickedBtn = e.target.className;
           let personChoice = clickedBtn
           let randomNum = Math.floor(Math.random() * allOptions.length);
           let computerChoice = allOptions[randomNum]

           if(personChoice === computerChoice){
            playerScore.innerHTML = playerScore.innerHTML;
            computerScore.innerHTML = computerScore.innerHTML;
               tie();
           }

           else if(personChoice === "rock" && computerChoice === "scissors"){
                playerScore.innerHTML = generalPlayerScore;
                generalPlayerScore++;
                win();
           }else if(personChoice === "rock" && computerChoice === "paper"){
                computerScore.innerHTML = generalComputerScore;
                generalComputerScore++;
                lose();
           }else if(personChoice === "paper" && computerChoice === "scissors"){
                computerScore.innerHTML = generalComputerScore;
                generalComputerScore++;
                lose();
           }else if(personChoice === "paper" && computerChoice === "rock"){
                playerScore.innerHTML = generalPlayerScore;
                generalPlayerScore++;
                win();
           }else if(personChoice === "scissors" && computerChoice === "rock"){
                computerScore.innerHTML = generalComputerScore;
                generalComputerScore++;
                lose();
           }else if(personChoice === "scissors" && computerChoice === "paper"){
                playerScore.innerHTML = generalPlayerScore;
                generalPlayerScore++;
                win();
           }
        });
    });
}

game();