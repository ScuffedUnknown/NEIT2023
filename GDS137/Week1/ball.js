var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')
function Ball() {
      this.x = canvas.width/2        
      this.y = canvas.height/2
      this.width = 100
      this.height = 100
      this.color = "#AA6AFA"
      this.vx = 0
      this.vy = 0
      this.draw = function () {
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x,this.y,this.width/2,0, 2 * Math.PI,true)
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
 //Declare my variables
var interval = 1000/60;

	//Set Up the Canvas
	
	//Instantiate the Player
	var ball = new Ball(canvas.width/2,canvas.height/2,50,"black",0,10,100)
      ball.vx=15  
      ball.vy=15
	//Set the Animation Timer
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	ctx.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
      ball.move()
	
      // if(ball.x > canvas.width + ball.width/2)
	// {
	// 	ball.x = -ball.width/2	
	// }
      if(ball.x > canvas.width - ball.width/2){
            ball.x =canvas.width - ball.width/2
            ball.vx = randomRange(25,5)
            ball.vx = -ball.vx
            console.log(ball.vx)

      }
      if(ball.x < ball.width/2){
            ball.x =ball.width/2
            ball.vx = randomRange(-5,-25)
            ball.vx = -ball.vx
            console.log(ball.vx)
      }
      if(ball.y > canvas.height - ball.height/2){
            ball.y =canvas.height - ball.height/2
            ball.vy = randomRange(25,5)
            ball.vy = -ball.vy
            console.log(ball.vx)

        }
      if(ball.y < ball.height/2){
            ball.y =ball.height/2
            ball.vy = randomRange(-5,-25)
            ball.vy = -ball.vy
            console.log(ball.vx)

        }

	//Update the Screen
      ball.draw()
}
function randomRange(high, low){
      return Math.random() * (high-low) + low
  }
  