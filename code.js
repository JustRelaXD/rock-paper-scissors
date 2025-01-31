let humanScore=0;
let computerScore=0;

function getComputerChoice(){
randomNumber=Math.floor(Math.random()*3);
switch(randomNumber){
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissor';
}
}

function getHumanChoice(){
  let HumanChoice=prompt("Enter your choice!")
  return HumanChoice.toLowerCase();
}

function playRound(humanChoice,computerChoice){
  if(humanChoice==computerChoice){
  console.log('Nobody wins. Both have same choice')
  }
  
  else if(humanChoice=='rock' && computerChoice=='scissor'){
    humanScore+=1;
    console.log('You win! Rock beats Scissor')
  }
  
  else if(humanChoice=='paper' && computerChoice=='rock'){
    humanScore+=1;
    console.log('You win! Paper beats Rock')
  }
  
  else if(humanChoice=='scissor' && computerChoice=='paper'){
    humanScore+=1;
    console.log('You win! Scissor beats Paper')
  }
  
  else if(humanChoice=='rock' && computerChoice=='paper'){
    computerScore+=1;
    console.log('You lose! Paper beats Rock')
  }
  
  else if(humanChoice=='paper' && computerChoice=='scissor'){
    computerScore+=1;
    console.log('You lose! Scissor beats Paper')
  }
  
  else if(humanChoice=='scissor' && computerChoice=='rock'){
    computerScore+=1;
    console.log('You lose! Rock beats Scissor')
  }
}

function playGame(){
  for(let i=0;i<5;i++){
    const humanChoice=getHumanChoice();
    const computerChoice=getComputerChoice();
    playRound();
  }
  
  if(humanScore>computerScore){
    console.log('Human wins with a score of '+ humanScore + '-' + computerScore + 'against the computer after five rounds')
  }
  
  else if(humanScore<computerScore){
    console.log('Computer wins with a score of '+ humanScore + '-' + computerScore + 'against the computer after five rounds')
  }
  
  else if (humanScore==computerScore){
    console.log("It's a tie! The score is"+ humanScore + '-' + computerScore)
  }
    
}

playGame();