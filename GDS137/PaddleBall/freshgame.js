var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var interval = 1000/60;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

	var ball = new GameObject()
	ball.y =canvas.width/2
	ball.y =canvas.height/2,
	ball.width = 80
	ball.height = 80
	ball.color = "#ff00ff"

	var paddle = new GameObject(canvas.width/2,canvas.height-50,250,40,'#00ffff')

	var score = 0
	ball.force = 2;
	paddle.force = 2
	paddle.ax =1
	var frictionX = .85;	
	var frictionY = .96;
	var gravity = 1;
    //Define Booleans for each key
var a = false;
var d = false;
var up = false;
var down = false
var p1Wins = 0
var p2Wins = 0
//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	
	if(e.keyCode == 38)
	{
		up = true;
	}
	if(e.keyCode == 40)
	{
		down = true;
	}
	
}

function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	
	if(e.keyCode == 38)
	{
		up = false;
	}
	if(e.keyCode == 40)
	{
		down = false;
	}
}
ball.vx = 5
ball.vy = 0

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height)
    ball.move()
    if(ball.x > canvas.width - ball.width/2){
		ball.x + ball.width
		ball.vx = -ball.vx

  }
  if(ball.x < ball.width/2){
	ball.x - ball.width
	ball.vx = -ball.vx


  }
  if(ball.y > canvas.height - ball.height/2){
	ball.y  = canvas.height - ball.height/2
	ball.vy = -ball.vy * .67
	score = 0

}

  if(ball.y < ball.height/2){
        ball.y =ball.height/2
        ball.vy = -ball.vy
		

    }
	ball.vy *= frictionY 
	ball.vy += gravity;

	ball.y += ball.vy;


	ball.x += ball.vx;
	if(ball.hitTestObject(paddle))
	{
		ball.y = ball.y-paddle.height
		ball.vy = -35
		score++
		if(ball.x < paddle.x - paddle.width/3){
			ball.vx = -ball.force*5
			

			
		}else if(ball.x > paddle.x- paddle.width/3 && ball.x <paddle.x-paddle.width/6){
		
			ball.vx = -ball.force
		}
		else if(ball.x < paddle.x+ paddle.width/3 && ball.x > paddle.x+paddle.width/6){
			
			ball.vx = ball.force
		}
		else if(ball.x > paddle.x + paddle.width/3){
			ball.vx = ball.force*5
			

			}else{
				
			}
	}
	
	if(d)
	{	
		paddle.vx +=  paddle.ax * paddle.force;
	}
	if(a)
	{
		paddle.vx += paddle.ax * -paddle.force;
	}
	paddle.vx *= frictionX;
	paddle.x += paddle.vx;
	paddle.y += paddle.vy;


    if(paddle.x > canvas.width - paddle.width/2){
        paddle.x =canvas.width - paddle.width/2
		paddle.vx = 0

    }
  if(paddle.x < paddle.width/2){
        paddle.x =paddle.width/2
		paddle.vx = 0

    }

    ball.drawCircle()
    paddle.drawRect()
	ctx.save()
    ctx.font = "16px Arial black"
    ctx.fillStyle = "#555555"
    ctx.fillText("Score: " + score, 80,25)
	ctx.save()
	ctx.strokeStyle = 'black'
	ctx.beginPath()
	ctx.moveTo(paddle.x,paddle.y)
	ctx.lineTo(ball.x,ball.y)
	ctx.closePath()
	ctx.lineWidth = 1	
	ctx.stroke()
	ctx.restore()
}
function randomRange(high, low){
    return Math.random() * (high-low) + low
}