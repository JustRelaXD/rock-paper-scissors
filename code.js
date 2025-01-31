
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
  let humanChoiceumanChoice=prompt("Enter your choice!")
  return humanChoice;
}

let HumanScore=0;
let ComputerScore=0;

HumanChoice=getHumanChoice();
ComputerChoice=getComputerChoice();
