

// Variables
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("resetButton");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var displayResult = document.getElementById("displayResult");
var scoreInput = document.getElementById("scoreInput");
var playToScoreDisplay = document.getElementById("playToScoreDisplay");

// Starting Scores
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

scoreInput.addEventListener("change", function(){
    playToScoreDisplay.textContent = scoreInput.value;
    winningScore = Number (scoreInput.value);
    reset();
})

// OnClick Increment Players Scores
p1Button.addEventListener("click", function(){
    if (!gameOver){
    p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            p1Display.classList.add("winner");
            displayResult.textContent = "Player One Wins!";
        }
    p1Display.textContent = p1Score;
    
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
            if (p2Score === winningScore){
                gameOver = true;
                p2Display.classList.add("winner");
                displayResult.textContent = "Player Two Wins!";
            }
        p2Display.textContent = p2Score;
        }
    });

// Rest The Game
resetButton.addEventListener("click", function(){
reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    displayResult.textContent = "Score Keeper";
}
