const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2;
let paddleSpeed = 5;
const paddleSpeedInc = 0;

let isRightPressed = false;
let isLeftPressed = false;

const ballRadius = 10;

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

const bricks = [];
for(let r = 0; r<brickRowCount; r++)
{
    bricks[r] = [];
    for(let c = 0; c<brickColumnCount; c++)
    {
        bricks[r][c] = {x: 0, y: 0, status: 1};
        (bricks[r][c]).x = c*(brickWidth + brickPadding) + brickOffsetLeft;
        (bricks[r][c]).y = r*(brickHeight + brickPadding) + brickOffsetTop;
    }
}

let score = 0;
let lives = 3;

const speedIncFreq = 2;
const speedInc = 1;
let collisionCount = 0;