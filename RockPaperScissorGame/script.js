const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice,computerChoice,result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = '<button class="btn btn-info"><img style="-webkit-transform: scaleX(-1);transform: scaleX(-1);" src="img/'+ userChoice +'.png" width="150px" height="150px" alt="'+ userChoice +'" id="'+ userChoice +'"  /></button> ';
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if(randomNumber ==1){
        computerChoice = 'rock'
    }else if(randomNumber==2){
        computerChoice = 'paper'
    }else if(randomNumber==3){
        computerChoice = 'scissor'
    }else{
        computerChoice ='error'
    }
    computerChoiceDisplay.innerHTML = '<button class="btn btn-primary"><img src="img/'+ computerChoice +'.png" width="150px" height="150px" alt="'+ computerChoice +'" id="'+ computerChoice +'"  /></button> ';
}

function getResult(){
    if(computerChoice==userChoice){
        result = 0;
    }else{
        if(computerChoice=='rock'){
            if(userChoice=='paper'){
                result = 1;
            }else if(userChoice=='scissor'){
                result = 2;
            }
        }else if(computerChoice=='paper'){
            if(userChoice=='rock'){
                result = 2;
            }else if(userChoice=='scissor'){
                result = 1;
            }
        }else if(computerChoice=='scissor'){
            if(userChoice=='paper'){
                result = 2;
            }else if(userChoice=='rock'){
                result = 1;
            }
        }
    }
    switch(result){
        case 0:
            result = "<p class='bg-secondary text-white'>Ohho! It's A Draw!</p>" ;
            break;
        case 1:
            result = "<p class='bg-success text-white'>Hurray ! You Won!</p>" ;
            break;
        case 2:
            result = "<p class='bg-danger text-white'>Ops!You Lost!</p>" ;
            break;
    }
    resultDisplay.innerHTML = result;
}