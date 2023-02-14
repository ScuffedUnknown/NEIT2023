var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var timer = requestAnimationFrame(main);
var bg = new Image()
bg.src = "images/background.png"
bg.onload = function(){
    main()
}

var start = 58
var finish = 956 
var speed = 5
var carPOS = 3
var startFuel = 965//randomNumber(canvas.width,600)
var fuel = startFuel
var fuelBarWidth = 512
var gameOver = true
var carWidth = 50
var seconds =3
var fps =60
var frames=fps

var carSpirte = new Image()
carSpirte.src = 'images/car.png'
carSpirte.onload = function(){
    main()
}

document.addEventListener("keydown",pressSpace)
function pressSpace(e){
    if(e.keyCode == 32& gameOver){
       gameOver = false 
    }
    if(fuel<=0){
        restartGame()
    }
}
function main(){

ctx.clearRect(0,0,canvas.width,canvas.height)
ctx.drawImage(bg,0,0)
if(gameOver){
ctx.save()
ctx.fillStyle = 'black'
ctx.font = '30px Hanken Grotesk'
ctx.textAlign='center'
ctx.fillText("Press Space to Start",canvas.width/2,canvas.height/2)
ctx.restore()
}else{
    drawStartFinishLines()
    drawCar()
    if(!gameOver&&seconds>0){
        runStartTimer()
        drawStartTimer()
    }else{
    if(fuel>0){
        carPOS ++
        fuel--
    }}
    drawFuelBar()
    if(fuel<=0 || carPOS +carWidth>finish){
        drawResults()
    }
}

timer = requestAnimationFrame(main)
}

function drawStartFinishLines(){
    ctx.fillStyle = 'white'
ctx.fillRect(start,150,10,454)
ctx.fillRect(finish,150,10,454)
}

function drawCar(){
    ctx.fillStyle = 'red'
    //ctx.fillRect(carPOS,canvas.height/2,carWidth,20)
    ctx.drawImage(carSpirte,carPOS,canvas.height/2,carWidth,20)
}
function drawFuelBar(){
    var currentBarWidth = fuelBarWidth * (fuel/startFuel)
    ctx.fillStyle='black'
    

    ctx.fillRect(start,30,fuelBarWidth,10)
    ctx.font = '25px Hanken Grotesk'
    ctx.fillText("FUEL",start,25
    )
    if(fuel>0){
        ctx.fillStyle='#00E3FF'
        ctx.fillRect(start,30,currentBarWidth,10)
    
    }
}
function drawResults(){
    if(carPOS + carWidth > finish){
        ctx.save()
        ctx.fillStyle='black'
        ctx.font =" 25px Hanken Grotesk"
        ctx.textAlign = 'center'
        ctx.fillText('You made it to the finish.. You Win',canvas.width/2,canvas.height/2)
        ctx.restore()
    }
    else{
        ctx.save()
    ctx.fillStyle='black'
    ctx.font =" 25px Hanken Grotesk"
    ctx.textAlign = 'center'
    ctx.fillText('You ran out of fuel.. You Lost',canvas.width/2,canvas.height/2)
        ctx.restore()
}
}

function randomNumber(high,low){
    return Math.round(Math.random() * (high-low) + low)
}
function restartGame(){
    location.reload();
}
function runStartTimer(){
    frames-=1
    if(frames<0){
        frames =fps
        seconds-=1
    }
}

function drawStartTimer(){
    if(Math.ceil(seconds)>0){

        ctx.save()
        ctx.fillStyle='black'
        ctx.font='30px Hanken Grotesk'
        ctx.textAlign ='center'
        ctx.fillText(seconds,canvas.width/2,canvas.height/2)
    
        ctx.restore()
    
    }
    else{

    ctx.save()
    ctx.fillStyle='black'
    ctx.font='30px Hanken Grotesk'
    ctx.textAlign ='center'
    ctx.fillText('GO!!!?>" 5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ',canvas.width/2,canvas.height/2)

    ctx.restore()

    }

}
