document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseHandler, false);

function keyDownHandler(keyevent)
{
    if((keyevent.key==="Right")||(keyevent.key==="ArrowRight"))
    {
        isRightPressed = true;
    }
    else if((keyevent.key==="Left")||(keyevent.key==="ArrowLeft"))
    {
        isLeftPressed = true;
    }
}

function keyUpHandler(keyevent)
{
    if((keyevent.key==="Right")||(keyevent.key==="ArrowRight"))
    {
        isRightPressed = false;
    }
    else if((keyevent.key==="Left")||(keyevent.key==="ArrowLeft"))
    {
        isLeftPressed = false;
    }
}

function mouseHandler(move)
{
    let relativeX = move.clientX - canvas.offsetLeft;
    if((relativeX>(paddleWidth/2))&&(relativeX<(canvas.width - (paddleWidth/2))))
    {
        paddleX = relativeX - (paddleWidth/2);
    }
}

function isBetween(coord, first, second)
{
    return ((coord>=first)&&(coord<=second));
}
function isStrictlyBetween(coord, first, second)
{
    return ((coord>first)&&(coord<second));
}
function checkWin()
{
    if(score==(brickColumnCount*brickRowCount))
    {
        alert("CONGRATS! YOU WIN!");
        document.location.reload();
    }
}