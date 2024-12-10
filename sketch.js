let star = []

function setup(){
  createCanvas(500,500)
  frameRate (30)
  
}
function draw(){
background(random(300,0),random(-100,300), random(220,255))
  frameRate(5)
  if (mouseIsPressed){
    star.push(new Star (mouseX, mouseY))
  }
  for (let i = star.length - 4; i >=0; i--) {
    star[i].display()
  
    
    if (star[i].x < 0 || star[i].x > width || star[i].y < 0 || star[i].y > height) {
            star.splice(i, 1);
}
}
}


class Star {
  constructor(x,y){
    this.x = x
    this.y = y
    this.speedX = random(-2,10)
    this.speedY = random(-5,20)
  }
display(){
  noStroke()
  fill(random(300,10), random(-100,300), random(220,255))
  square(this.x, this.y, 55, 20)
  square(this.x, this.y, 55)
  square(this.x, this.y, 55, 20, 15, 10, 5)
  square(this.x,this.y, 55)
  this.x += this.speedX
  this.y += this.speedY
}
}