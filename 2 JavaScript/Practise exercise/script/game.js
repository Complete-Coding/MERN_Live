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

function rockClicked() {
  let computerChoice1 = getComputerChoice();
  
  let result;
  if (computerChoice1 == `👊 Rock`) {
    result = 'Tie';
  } else if (computerChoice1 == `✋ Paper`) {
    result = 'I Won';
  } else {
    result = 'You Won';
  }

  document.querySelector('#result').innerHTML = `You chose 👊 Rock. <br>
    I chose ${computerChoice1}. <br>
    And the result is: ${result}`;
}

function paperClicked() {
  let computerChoiceText = getComputerChoice();

  let result;
  if (computerChoiceText == `👊 Rock`) {
    result = 'You Won';
  } else if (computerChoiceText == `✋ Paper`) {
    result = 'Tie';
  } else {
    result = 'I Won';
  }
  document.querySelector('#result').innerHTML = `You chose ✋ Paper. <br>
   I chose ${computerChoiceText}. <br>
   And the result is: ${result}`;
}

function scissorsClicked() {
  let computerChoiceText = getComputerChoice();

  let result;
  if (computerChoiceText == `👊 Rock`) {
    result = 'I Won';
  } else if (computerChoiceText == `✋ Paper`) {
    result = 'You Won';
  } else {
    result = 'Tie';
  }

  document.querySelector('#result').innerHTML = `You chose ✌️ Scissors. <br>
   I chose ${computerChoiceText}. <br>
   And the result is: ${result}`;
}