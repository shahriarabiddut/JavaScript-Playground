const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('.score');
scoreDisplay.classList.remove('gameover');
// block sizing
const blockWidth = 100;
const blockHeight = 20;
// user variables
const userStart = [230,10];
let currentPosition = userStart;
// Get Width 
let styleOfGrid = getComputedStyle(grid);
let widthValue = styleOfGrid.getPropertyValue('width');
let heightValue = styleOfGrid.getPropertyValue('height');
let boardWidth = parseInt(widthValue, 10);
let boardHeight = parseInt(heightValue, 10);
// Ball 
const ballStartPosition = [270,40];
const ballCurrentPosition = ballStartPosition;
const ballDiameter = 20;
let xDirection = -2;
let yDirection = 2;
//timer
let timerId ;
//Score
let score = 0;
//Create Block
class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft = [xAxis,yAxis];
        this.bottomRight = [xAxis+blockWidth,yAxis];
        this.topLeft = [xAxis,yAxis+blockHeight];
        this.topRight= [xAxis+blockWidth,yAxis+blockHeight];
    }
}
// all my blocks
const blocks = [
    new Block(10,270),new Block(120,270),new Block(230,270),new Block(340,270),new Block(450,270),
    new Block(10,245),new Block(120,245),new Block(230,245),new Block(340,245),new Block(450,245),
    new Block(10,220),new Block(120,220),new Block(230,220),new Block(340,220),new Block(450,220),
]
//Draw all my Block
function addBlock(){
    
    for(let i=0;i<blocks.length;i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom =  blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}
addBlock();

// Add User 
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

// draw the user
function drawUser(){
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom =  currentPosition[1] + 'px';
}

// move user 
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft' : 
           if(currentPosition[0]>10){
            currentPosition[0] -=15; 
            drawUser();
            }
            break;
        case 'ArrowRight' : 
            if(currentPosition[0] < boardWidth - 110){
                currentPosition[0] +=15; 
                drawUser();
            }
            break;

    }
}
document.addEventListener('keydown',moveUser);

// add ball 
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

//draw ball
function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom =  ballCurrentPosition[1] + 'px';
}

// move ball
function moveBall(){
    ballCurrentPosition[0] +=xDirection;
    ballCurrentPosition[1] +=yDirection;
    drawBall();
    checkForCollisions()
} 

timerId = setInterval(moveBall,20);

// check for collisions
function checkForCollisions(){

    // check for block collisions
    for(let i = 0;i<blocks.length;i++){
        if((ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && (ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]){
            const allBlocks = document.querySelectorAll('.block');
            allBlocks[i].classList.remove('block');
            blocks.splice(i,1);
            changeDirection();
            score++;
            scoreDisplay.innerHTML = 'Score : ' + score;
            //check for win
            if(blocks.length === 0){
                scoreDisplay.innerHTML = 'You Win ! Score : ' + score;
                document.removeEventListener('keydown',moveUser);
                clearInterval(timerId);
            }
        }
    }
    // check for wall collisions
    if(ballCurrentPosition[0]>= boardWidth - ballDiameter || ballCurrentPosition[1]>= boardHeight - ballDiameter || ballCurrentPosition[0] <=0   ){
        changeDirection();
    }
    //Check for User Collision
    if((ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) && ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight){
        changeDirection();
    }
    // Check For Game Over
    if(ballCurrentPosition[1]<=0){
        clearInterval(timerId);
        scoreDisplay.innerHTML= ' You Lose! ';
        scoreDisplay.classList.add('gameover');
        document.removeEventListener('keydown',moveUser);        
    }
}
function changeDirection(){
    if(xDirection ===2 && yDirection ===2){
        yDirection=-2;
        return
    }
    if(xDirection ===2 && yDirection ===-2){
        xDirection=-2;
        return
    }
    if(xDirection ===-2 && yDirection ===-2){
        yDirection=2;
        return
    }
    if(xDirection ===-2 && yDirection ===2){
        xDirection=2;
        return
    }
}