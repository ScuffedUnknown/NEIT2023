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