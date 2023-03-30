var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
class Ball {
constructor(x, y, radius, color, force, vx, vy) {
      this.x = x        
      this.y = y
      this.radius = radius
      this.color = color
      this.force = force
      this.vx = vx
      this.vy = vy
      this.draw = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x,this.y,radius,0, 2 * Math.PI,true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()


     }

 //This changes the player's position
this.move = function () {
      this.x += this.vx
      this.y += this.vy
      }
   }
 }
 //Declare my variables
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	var ball = new Ball(canvas.width/2,canvas.height/2,50,"black",0,10,100)

	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	ball.x += ball.vx;
	
	//Update the Screen
      ball.draw()
}
