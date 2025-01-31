
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
}

let HumanScore=0;
let ComputerScore=0;
