let userScore = 0;
let compScore = 0;

const btns = document.querySelectorAll(".btn");
const winMsg = document.querySelector("#win-msg");
const win_msg = document.querySelector(".win_msg");
const UserScore = document.querySelector("#user");
const CompScore = document.querySelector("#comp");

const genCompChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random()*3);
    return choices[randIdx];
}

const drawGame = () => {
    winMsg.innerText = "Game was Draw.";
    win_msg.style.backgroundColor = "#3C6E71"
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        winMsg.innerText = `You Win!`;
        win_msg.style.backgroundColor = "Green";
        UserScore.inenerText = userScore;
    }else{
        compScore++;
        winMsg.innerText = `You Lose.`;
        win_msg.style.backgroundColor = "Red";
        CompScore.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    //Generate computer choice;    
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin)
    }
}

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=> {
        const userChoice = btn.getAttribute("id");
        playGame(userChoice);
    });
});




