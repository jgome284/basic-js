const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput !== 'rock' && userInput !== 'scissors' && userInput !== 'paper') {
      console.log(`${userInput} is not a valid input`) 
      } else {
        return userInput
    } 
  }
  
  const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      default:
        console.log('The world is broken');
        break;
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'You tied!'
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You loose!'
      } else {
        return 'You win!'
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
          return 'You loose!'
      } else {
        return 'You win!'
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
          return 'You loose!'
      } else {
        return 'You win!'
      }
    } else {
      console.log(`${userChoice} is not a valid input`)
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice('rock');
    console.log(`You chose: ${userChoice}`)
    let computerChoice = getComputerChoice();
    console.log(`The computer chose: ${computerChoice}`)
  
    console.log(determineWinner(userChoice, computerChoice));
    console.log('\n')
  }
  
  playGame();
  playGame();
  playGame();