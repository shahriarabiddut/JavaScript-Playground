const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#timeLeft');
const score = document.querySelector('#score');
let result = 0;
let hitPosition;
let currenttime = 60;
let timerId = null;
function randomSquare(){
    squares.forEach((square) =>{
        square.classList.remove('mole');
    })
    let randomSquares = squares[Math.floor(Math.random()*9)];
    randomSquares.classList.add('mole');
    hitPosition = randomSquares.id;
}
squares.forEach((square)=>{
    square.addEventListener('mousedown',()=>{
        if(square.id==hitPosition){
            result++
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function moveMole(){
    timerId = setInterval(randomSquare,900);
}

function countDown(){
    currenttime--
    timeLeft.textContent = currenttime + ' s';
    if(currenttime==0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! Your final score is '+ result);
        score.textContent = 0;
        hitPosition = null;
    }
}
let countDownTimerId = setInterval(countDown,1000);
moveMole()