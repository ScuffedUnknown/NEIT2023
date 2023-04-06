var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
var interval = 1000/60;
	//Set the Animation Timer
	timer = setInterval(animate, interval);

	var ball = new GameObject(canvas.width/2,canvas.height/2,50,50,"black")

	var paddle = new GameObject(0,canvas.height/2,50,150,'Purple')

    //Define Booleans for each key
var w = false;
var s = false;

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
}
ball.vx = -10
ball.vy = 0

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);	
    ball.move()
    if(ball.x > canvas.width - ball.width/2){
        ball.x = canvas.width - ball.width/2
        ball.vx = -ball.vx
  }
  if(ball.x < ball.width/2){
	ball.x = canvas.width/2
	ball.y = canvas.height/2	

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
			ball.vx = 5
			ball.vy = -5
		}
		if(ball.y < paddle.y + paddle.height/6){
			ball.vx = 5
		}
		if(ball.y > paddle.y + paddle.height/6){
			ball.vx = 5
			ball.vy = 5
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
    if(paddle.y > canvas.height - paddle.height/2){
        paddle.y =canvas.height - paddle.height/2

    }
  if(paddle.y < paddle.height/2){
        paddle.y =paddle.height/2
    }
    ball.drawCircle()
    paddle.drawRect()

}
function randomRange(high, low){
    return Math.random() * (high-low) + low
}