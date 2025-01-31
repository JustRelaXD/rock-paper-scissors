
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

let HumanScore=0;
let ComputerScore=0;

const humanChoice=getHumanChoice();
const computerChoice=getComputerChoice();

function playRound(humanChoice,computerChoice){
  if(humanChoice==computerChoice){
    winner='none';
  }
  
  else if(humanChoice=='rock' && computerChoice=='scissor'){
    winner='human';
  }
  
  else if(humanChoice=='paper' && computerChoice=='rock'){
    winner='human';
  }
  
  else if(humanChoice=='scissor' && computerChoice=='paper'){
    winner='human';
  }
  
  else if(humanChoice=='rock' && computerChoice=='paper'){
    winner='computer';
  }
  
  else if(humanChoice=='paper' && computerChoice=='scissor'){
    winner='computer';
  }
  
  else if(humanChoice=='scissor' && computerChoice=='rock'){
    winner='computer';
  }
}

