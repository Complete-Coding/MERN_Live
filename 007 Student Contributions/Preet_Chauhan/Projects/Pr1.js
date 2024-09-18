let score ={
    computer: 0,
    user: 0,
    tie: 0,
    updateScore: function(){
        this.saveScore();
        document.querySelector('#score').innerHTML =`
        Score is :- Computer : ${this.computer}
                    User : ${this.user}
                    Tieds : ${this.tie}
        `;
    },
    saveScore: function() {
        let scoreStr = JSON.stringify(this); 
        localStorage.setItem('score',scoreStr); 
        console.log(`Score saved : ${scoreStr}`);
    }
}
function iniitialize() { // To set score on beginning of the game .
let scoreStr = localStorage.getItem('score'); // "scoreStr" is an variable to store the score json .
    if (scoreStr) {
        console.log(`Previous Scored Found : ${scoreStr}`)
        let scoreVal = JSON.parse(scoreStr); // "scoreVal" is an Object to store the data(in Form of keys and values) of "scoereStr"  .
        score.computer = scoreVal.computer; // Updating the value of Global Object "score" .
        score.user = scoreVal.user;         // Updating the value of Global Object "score" . 
        score.tie = scoreVal.tie;           // Updating the value of Global Object "score" .      
        score.updateScore();
    }
}
function resetScore() {
    score.computer = 0;
    score.user = 0;
    score.tie = 0;
    score.updateScore();
}
function getChoice() { // Generating the random numbers  
    let randomChoice = Math.floor(Math.random() * 6);
    return randomChoice;
}

function computeChoice() {
    let computerText;
    let randomChoice = getChoice();

    if (randomChoice === 1) {
        computerText = `✊ Rock`;
    } else if (randomChoice === 2) {
        computerText = `✋ Paper`;
    } else if (randomChoice === 3) {
        computerText = `✌️ Scissor`;
    } else if (randomChoice === 4) {
        computerText = `✊ Rock`;
    } else if (randomChoice === 5) {
        computerText = `✋ Paper`;
    } else {
        computerText = `✌️ Scissor`;
    }
    return computerText;
}
function updateResult(usereChoice, computerChoice, result) {
   
    document.querySelector('#result').innerHTML = `
<pre>
You Chose            : ${usereChoice} 
Computer Chose       : ${computerChoice} 
And The Result is    : ${result}
</pre>
    `;

}
function computeResult(usereChoice, computerChoice) {
    let result = 'unknow';
        if (computerChoice === usereChoice) {
        result = 'Tie ';
        score.tie++;
    } else if ((computerChoice === `✊ Rock` && usereChoice === `✌️ Scissor`) ||
        (computerChoice === `✌️ Scissor` && usereChoice === `✋ Paper`) ||
        (computerChoice === `✋ Paper` && usereChoice === `✊ Rock`)) {
        result = `Computer Won `;
        score.computer++;
    } else {
        result = `You Won`;
        score.user++;
    }
    score.updateScore();
    return result;
}

// Creating Functions For onclick  -->
function rockClicked() {
    const usereChoice = `✊ Rock`;
    let computerText = computeChoice();
    let result = computeResult(usereChoice, computerText);
    updateResult(usereChoice, computerText, result);
}

function paperClicked() {
    const usereChoice = `✋ Paper`;
    let computerText = computeChoice();
    let result = computeResult(usereChoice, computerText);
    updateResult(usereChoice, computerText, result);
}

 function scissorClicked() {
    const usereChoice = `✌️ Scissor`;
    let computerText = computeChoice();
    let result = computeResult(usereChoice, computerText);
    updateResult(usereChoice, computerText, result);
}
iniitialize(); 





//Rough Code ----------> 
// let scoreJSON = JSON.stringify(score);
// console.log(scoreJSON);
