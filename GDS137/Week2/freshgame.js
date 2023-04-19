var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var interval = 1000/60;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

	var ball = new GameObject(canvas.width/2,canvas.height/2,35,35,"black")

	var paddle = new GameObject(0,canvas.height/2,25,150,'Purple')
	var paddle2 = new GameObject(1025,canvas.height/2,25,150,'Purple')

	var img=document.getElementById("ric");
    //Define Booleans for each key
var w = false;
var s = false;
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
	
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
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
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
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
ball.vx = -10
ball.vy = 0

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height)
    ball.move()
    if(ball.x > canvas.width - ball.width/2){
		ball.x = canvas.width/2
		ball.y = canvas.height/2
		p1Wins++;
		console.log(p1Wins)	
  }
  if(ball.x < ball.width/2){
	ball.x = canvas.width/2
	ball.y = canvas.height/2	
	p2Wins++
	console.log(p2Wins)	

  }
  if(ball.y > canvas.height - ball.height/2){
		ball.y =canvas.height - ball.height/2
        ball.vy = -ball.vy

    }
  if(ball.y < ball.height/2){
        ball.y =ball.height/2
        ball.vy = -ball.vy

    }
	if(ball.hitTestObject(paddle))
	{
		if(ball.y < paddle.y - paddle.height/6){
			ball.vx = 10
			ball.vy = -10
		}
		if(ball.y < paddle.y + paddle.height/6){
			ball.vx = 10
		}
		if(ball.y > paddle.y + paddle.height/6){
			ball.vx = 10
			ball.vy = 10
		}
	}
	if(ball.hitTestObject(paddle2))
	{
		if(ball.y < paddle2.y - paddle2.height/6){
			ball.vx = -10
			ball.vy = 10
		}
		if(ball.y < paddle2.y + paddle2.height/6){
			ball.vx = -10
		}
		if(ball.y > paddle2.y + paddle2.height/6){
			ball.vx = -10
			ball.vy = -10
		}
		
	}
	if(w)
	{

		paddle.y += -5;
	}
	if(s)
	{

		paddle.y += 5;
	}
	if(up)
	{

		paddle2.y += -5;
	}
	if(down)
	{

		paddle2.y += 5;
	}
    if(paddle.y > canvas.height - paddle.height/2){
        paddle.y =canvas.height - paddle.height/2

    }
  if(paddle.y < paddle.height/2){
        paddle.y =paddle.height/2
    }
    if(paddle2.y > canvas.height - paddle2.height/2){
        paddle2.y =canvas.height - paddle2.height/2

    }
  if(paddle2.y < paddle2.height/2){
        paddle2.y =paddle2.height/2
    }
    // ball.drawCircle()
    paddle.drawRect()
    paddle2.drawRect()


	ctx.save()
    ctx.font = "30px Roboto Mono"
    ctx.fillStyle = "black"
    ctx.fillText("Player 1 | Player 2", canvas.width/2-110, 35)
	ctx.font = "15px Roboto Mono"
	ctx.fillText(p1Wins + " - "+ p2Wins, canvas.width/2 -13.4, 70)
    ctx.restore()
	ctx.drawImage(img,ball.x-ball.width/2,ball.y-ball.height/2,ball.width,ball.height)
}
function randomRange(high, low){
    return Math.random() * (high-low) + low
}