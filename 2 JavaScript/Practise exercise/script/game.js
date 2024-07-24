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
  document.querySelector('#result').innerHTML = 
  `You chose ${userChoice}. <br>
   I chose ${computerChoice}. <br>
   And the result is: ${result}`;
}

function getResult(userChoice, computerChoice) {
  let result = 'Unknown';
  if (userChoice === computerChoice) {
    result = 'Tie';
  } else if ((computerChoice === '👊 Rock' && userChoice === '✌️ Scissors') ||
             (computerChoice === '✌️ Scissors' && userChoice === '✋ Paper') ||
             (computerChoice === '✋ Paper' && userChoice === '👊 Rock')
  ) {
    result = 'I win';
  } else {
    result = 'You win';
  }
  return result;
}

function rockClicked() {
  const userChoice = '👊 Rock';
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

function paperClicked() {
  const userChoice = '✋ Paper';
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}

function scissorsClicked() {
  const userChoice = '✌️ Scissors';
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  updateResult(userChoice, computerChoice, result);
}