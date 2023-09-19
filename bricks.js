function drawBricks()
{
    for(let r = 0; r<brickRowCount; r++)
    {
        for(let c = 0; c<brickColumnCount; c++)
        {
            let brickX = (bricks[r][c]).x;
            let brickY = (bricks[r][c]).y;
            let brickS = (bricks[r][c]).status;
            if(brickS)
            {
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function collisionDetection()
{
    for(let r = 0; r<brickRowCount; r++)
    {
        for(let c = 0; c<brickColumnCount; c++)
        {
            let b = bricks[r][c];
            if(!(b.status)) continue;
            //checking collision from above or below the brick
            if
            (
                (
                    isBetween(y+ballRadius, b.y, b.y+brickHeight)
                    &&
                    (
                        isStrictlyBetween(x-ballRadius, b.x, b.x+brickWidth)
                        ||
                        isStrictlyBetween(x+ballRadius, b.x, b.x+brickWidth)
                    )
                )
                ||
                (
                    isBetween(y-ballRadius, b.y, b.y+brickHeight)
                    &&
                    (
                        isStrictlyBetween(x-ballRadius, b.x, b.x+brickWidth)
                        ||
                        isStrictlyBetween(x+ballRadius, b.x, b.x+brickWidth)
                    )
                )
            )
            {
                (bricks[r][c]).status = 0;
                dy = -dy;
                score++;
                checkWin();
                collisionCount++;
                return;
            }
            //checking if sideways collision with brick
            else if
            (
                (
                    isBetween(x+ballRadius, b.x, b.x+brickWidth)
                    &&
                    (
                        isBetween(y-ballRadius, b.y, b.y+brickHeight)
                        ||
                        isBetween(y+ballRadius, b.y, b.y+brickHeight)
                    )
                )
                ||
                (
                    isBetween(x-ballRadius, b.x, b.x+brickWidth)
                    &&
                    (
                        isBetween(y-ballRadius, b.y, b.y+brickHeight)
                        ||
                        isBetween(y+ballRadius, b.y, b.y+brickHeight)
                    )
                )
            )
            {
                (bricks[r][c]).status = 0;
                dx = -dx;
                score++;
                checkWin();
                collisionCount++;
                return;
            }
        }
    }
}