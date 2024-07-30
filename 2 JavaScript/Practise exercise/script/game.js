let score = {
  computer: 0,
  user: 0,
  tie: 0,
};

function getRandomChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  return randomChoice;
}

function getComputerChoice() {
  let randomChoice = getRandomChoice();
  let computerChoice;
  if (randomChoice === 1) {
    computerChoice = `👊 Rock`;
  } else if (randomChoice === 2) {
    computerChoice = `✋ Paper`;
  } else {
    computerChoice = `✌️ Scissors`;
  }
  return computerChoice;
}

function updateResult(userChoice, computerChoice, result) {
  document.querySelector('#score').innerHTML = `
  Score: Computer Won: ${score.computer}, User Won: ${score.user}, Tie: ${score.tie}`;

  document.querySelector('#result').innerHTML = 
  `You chose ${userChoice}. <br>
   I chose ${computerChoice}. <br>
   And the result is: ${result}`;
}

function computeResult(userChoice, computerChoice) {
  let result = 'Unknown';
  if (userChoice === computerChoice) {
    result = 'Tie';
    score.tie++;
  } else if ((computerChoice === '👊 Rock' && userChoice === '✌️ Scissors') ||
             (computerChoice === '✌️ Scissors' && userChoice === '✋ Paper') ||
             (computerChoice === '✋ Paper' && userChoice === '👊 Rock')
  ) {
    result = 'I win';
    score.computer++;
  } else {
    result = 'You win';
    score.user++;
  }
  return result;
}

function rockClicked() {
  const userChoice = '👊 Rock';
  let computerChoice = getComputerChoice();
  let result = computeResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

function paperClicked() {
  const userChoice = '✋ Paper';
  let computerChoice = getComputerChoice();
  let result = computeResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

function scissorsClicked() {
  const userChoice = '✌️ Scissors';
  let computerChoice = getComputerChoice();
  let result = computeResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}