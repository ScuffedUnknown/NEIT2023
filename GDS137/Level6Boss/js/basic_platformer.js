
var canvas;
var context;
var timer;
var interval;
var player;
var win = false
var winCount = 0
var tTimer = 0
var wTimer = 0
var fullTimer = 0
var second = 0
var min = 0
var Bmin = 0
var Bsec = 0
var BfulLTime = 1000000000
var alive = false
canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new GameObject({x:100, y:canvas.height/2-100});
	
	platform0 = new GameObject();
		platform0.width = canvas.width-700;
		platform0.x = platform0.width/2;
		platform0.color = "#66ff33";
		
	
	platform2 = new GameObject();
		platform2.width = canvas.width;
		platform2.x = platform2.width/2;
		platform2.color = "#66ff33";
		platform2.y = canvas.height-platform2.height;
		platform2.color = "#66ff33";

		goal = new GameObject({width:24, height:50, x:canvas.width-100, y:platform2.y-100, color:"#00ffff"});
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var oldX = player.x;
	var oldY = player.y;

	interval = 1000/60;
	timer = setInterval(animate, interval);

	function animate(){

		context.clearRect(0,0,canvas.width, canvas.height);	

		if(alive){


		wTimer++
		fullTimer++
		if(wTimer == 60){
			second++
			wTimer = 0
		}if(second == 60){
			min++
			second = 0
		}
		if(win){
			if(winCount > 3){
				player.color ="#EFE01C"
			}

			if(fullTimer < BfulLTime ){
				console.log("faster")
				Bmin = min
				Bsec = second
				BfulLTime = fullTimer

			}
			min = 0
			second = 0
			wtimer = 0
			fullTimer = 0
			winCount ++
			player.x = oldX
			player.y = oldY
			win = false
			}
			if(tTimer > 0){
				if(winCount == 5){
				tTimer --
				context.font = "16px Arial black"
				context.fillStyle = "#555555"
				context.fillText("You Won 5 times and unlocked special mode!", canvas.width/2,canvas.height/2)
				
				}
				tTimer --
				context.font = "16px Arial black"
			context.fillStyle = "#555555"
			context.fillText("You Won", canvas.width/2,canvas.height/2)
			}
			console.log(fullTimer,BfulLTime)

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
	if(player.hitTestObject(goal))
	{
		win = true
		tTimer = 60

	}
		platform0.drawRect();
		platform2.drawRect();
		//platform1.drawRect();
		player.drawRect();
		context.font = "16px Arial black"
	context.fillStyle = "#555555"
	context.fillText("Wins: " + winCount, 50,50)
	if(Bsec>0){
		if(Bsec <= 9){
			context.fillText("Best Time: " + Bmin + ":0" + Bsec, 50,100)
	
		}else{context.fillText("Best Timer: " + Bmin + ":" + Bsec, 50,100)
	}	
	}	
	if(second <= 9){
		context.fillText("Timer: " + min + ":0" + second, 50,75)

	}else{	context.fillText("Timer: " + min + ":" + second, 50,75)
}		//Show hit points


		goal.drawCircle();
}else{
	min = 0
	second = 0
	wtimer = 0
	fullTimer = 0
	if(Bsec>0){
		if(Bsec <= 9){
			context.fillText("Best Time: " + Bmin + ":0" + Bsec, 50,100)
	
		}else{context.fillText("Best Timer: " + Bmin + ":" + Bsec, 50,100)
	}	
	}
	player.x=100
	player.y=canvas.height/2-100
	context.font = "32px Arial black"
	context.fillStyle = "#555555"
	context.fillText("Press Space to Start", canvas.width/2-175,canvas.height/2)
}
	}
