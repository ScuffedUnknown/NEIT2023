//Declare my variables

var canvas;
var context;
var timer;
var interval;
var player;
var putimer = 300
var tTimer = 0
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});
	powerUp = false
	platform0 = new GameObject();
		platform0.width = canvas.width-700;
		platform0.x = platform0.width/2;
		platform0.color = "#66ff33";
		
	
	platform1 = new GameObject();
		platform1.x = 500;
		platform1.y = canvas.height-platform1.height;
		platform1.color = "#ffff00";
		
	platform2 = new GameObject();
		platform2.width = canvas.width-300;
		platform2.x = platform2.width/2;
		platform2.color = "#66ff33";
		platform2.y = canvas.height-platform2.height;
		platform2.color = "#66ff33";

		
	
	goal = new GameObject({width:24, height:50, x:20, y:platform0.y-100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var oldX;
	var oldY;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
	}
	if(d)
	{
		player.vx += player.ax * player.force;
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);
	
	platform1.x += platform1.vx;

	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0
		if(!powerUp){
			context.font = "16px Arial black"
			context.fillStyle = "#555555"
			context.fillText("You Lose", canvas.width/2,canvas.height/2)
		}else{
			player.x = oldX;
			player.y = oldY
			tTimer = 25
			powerUp = false;
		}

	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;

	}
	if(putimer > 0){
		if(powerUp){
			player.drawDebug();
		putimer --
	}
}
	if (tTimer > 0){
		tTimer--;
		context.font = "16px Arial black"
		context.fillStyle = "#555555"
		context.fillText("Saved!", player.x + player.width/2,player.y-player.height/2)
	}
	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		powerUp = true;
		oldX = player.x
		oldY = player.y
		putimer = 300
	}
	


console.log(putimer)
	

	
	
	
	
	
	platform0.drawRect();
	platform2.drawRect();
	//platform1.drawRect();
	player.drawRect();
	
	//Show hit points

	goal.drawCircle();
}

