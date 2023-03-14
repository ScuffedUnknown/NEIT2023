/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
startButton.img.src="images/mrt.jpg"
startButton.x=510;
startButton.y=276;
startButton.width=259;
startButton.height=50;
startButton.hitBoxWidth=259;
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/finished.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			sounds.play('backgroundsound',0);
		}

		//Hover Effect Graffic
		startButton.color = `purple`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `white`
	}
	
	menuBackground.drawStaticImage();
	startButton.render()
}
	
	
