function drawPaddle()
{
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

}
function updatePaddle()
{
    if(isRightPressed && (!isLeftPressed))
    {
        paddleX = Math.min(paddleX+paddleSpeed, canvas.width - paddleWidth);
    }
    else if(isLeftPressed && (!isRightPressed))
    {
        paddleX = Math.max(paddleX-paddleSpeed, 0);
    }

}