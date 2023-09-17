function drawBall()
{
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function updateBall()
{
    if(collisionCount==speedIncFreq)
    {
        collisionCount = 0;
        dx += ((Math.sign(dx))*speedInc);
        dy += ((Math.sign(dy))*speedInc);
        paddleSpeed += paddleSpeedInc;
    }
    //checking if ball colliding the walls of canvas
    if(((x+ballRadius)>=canvas.width)||((x-ballRadius)<=0))
    {
        dx = -dx;
    }

    //checking if ball is colliding the roof of canvas
    if((y-ballRadius)<=0)
    {
        dy = -dy;
    }
    //checking if ball is colliding with paddle from ball's right side
    else if
    (
        (
            isBetween(x+ballRadius, paddleX, paddleX+paddleWidth)
            )
            &&
            (
                isStrictlyBetween(y+ballRadius, canvas.height-paddleHeight, canvas.height)
        )
        )
        {
        dy = -dy;
        dx = -Math.abs(dx);
    }
    //checking if ball is colliding with paddle from ball's left side
    else if
    (
        (
            isBetween(x-ballRadius, paddleX, paddleX+paddleWidth)
            )
            &&
            (
                isStrictlyBetween(y+ballRadius, canvas.height-paddleHeight, canvas.height)
                )
                )
                {
                    dy = -dy;
                    dx = Math.abs(dx);
    }
    //checking if ball is colliding with paddle from below
    else if
    (
        (
            // (y+ballRadius)>=(canvas.height-paddleHeight)
            isBetween(y+ballRadius, canvas.height-paddleHeight, canvas.height)
        )
        &&
        (
            isStrictlyBetween(x-ballRadius, paddleX, paddleX+paddleWidth)
            ||
            isStrictlyBetween(x+ballRadius, paddleX, paddleX+paddleWidth)
        )
    )
    {
        dy = -dy;
    }
    else if(((y+ballRadius)>=canvas.height))
    {
        lives--;
        if(!lives)
        {
            alert("GAME OVER!");
            document.location.reload();
        }
        else
        {
            //resetting position of ball and paddle
            x = canvas.width / 2;
            y = canvas.height - 30;
            dx = 2;
            dy = -2;
            paddleX = (canvas.width-paddleWidth)/2;
            collisionCount = 0;
            paddleSpeed = 5;
        }
    }
    x += dx;
    y += dy; 

}