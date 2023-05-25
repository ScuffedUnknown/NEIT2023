
var canvas;
var context;
var timer;
var interval;
var player;
var score = 0
var amount = 5
var win = false
var loss = false
var time = 0
canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new GameObject({x: canvas.width/2, y:canvas.height-50, width:50, height:50});
	player.color = "#ffff00"
	var squares = []
	var circles = []
	for(var i = 0; i < amount; i++)
	{
		squares[i] = new GameObject({width:35, height:35});
		squares[i].color = '#20a83b'
		squares[i].x = Math.random() * canvas.width;
		squares[i].y =0-50;
		squares[i].vy = Math.random() * 10 + 4;
	}
	for(var i = 0; i < amount; i++)
	{
		circles[i] = new GameObject({width:35, height:35});
		circles[i].color = '#c92424'
		circles[i].x = Math.random() * canvas.width;
		circles[i].y =0-50;
		circles[i].vy = Math.random() * 10 + 4;
	}
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;
	var oldX = player.x;
	var oldY = player.y;

	interval = 1000/60;
	timer = setInterval(animate, interval);

	function animate(){

		context.clearRect(0,0,canvas.width, canvas.height);	
		if(a)
		{
			player.vx += -player.ax * player.force;
		}
		if(d)
		{
			player.vx += player.ax * player.force;
		}
			
		player.vx *= fX;
		player.x += Math.round(player.vx);
		
		while(player.x+player.width/2>canvas.width)
	{
		player.x--;
		player.vx = 0;
	}
	for(var p = 0; p < squares.length; p++)
	{	
		squares[p].x += squares[p].vx;
		squares[p].y += squares[p].vy;
		if(squares[p].hitTestPoint(player))
		{
			squares[p].y =0-50;
			win = true
			score++
			console.log("scored")
		}
	if(squares[p].y+squares[p].height/2 > canvas.height){
		squares[p].x = Math.random() * canvas.width;
		squares[p].y =0-50;
		squares[p].vy = Math.random() * 10 + 4;
	}
		squares[p].drawRect();
	}
	for(var p = 0; p < circles.length; p++)
	{	
		circles[p].x += circles[p].vx;
		circles[p].y += circles[p].vy;
		if(circles[p].hitTestPoint(player))
		{
			for(var i = 0; i < amount; i++)
			{
				circles[i].x = Math.random() * canvas.width;
				circles[i].y =0-50;
				circles[i].vy = Math.random() * 10 + 4;
				squares[i].x = Math.random() * canvas.width;
				squares	[i].y =0-50;
				squares[i].vy = Math.random() * 10 + 4;
			}

			loss = true
			score = 0
			console.log("Lost")
		}
	if(circles[p].y+circles[p].height/2 > canvas.height){
		circles[p].x = Math.random() * canvas.width;
		circles[p].y =0-50;
		circles[p].vy = Math.random() * 10 + 4;
	}
		circles[p].drawCircle();
	}
		if(time < 30){
			if(win){
				time ++
				player.color = "green"
			}
			if(loss){
				time ++
				player.color = "red"
			}
		}
		if(time==30){
			time = 0	
			player.color = "#ffff00"
			win = false
			loss = false
		}
		player.drawRect()
		context.font = 'bold 30px Arial';
		context.fillStyle = "#555555"
		context.fillText("Score:" + score, 50,50)
		console.log(time)
	
	}