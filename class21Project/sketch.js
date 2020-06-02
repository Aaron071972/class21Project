var car,wall;
var speed, weight;

carImage = loadImage("lambo.png")

function setup() {
speed=random(2,30)
weight=random(400,1500)


carImage = loadImage("lambo.png")

  createCanvas(1000,400);
  
  car=createSprite(50, 200, 50, 50);
  car.velocityX= speed

  wall=createSprite(950,200,60, height/2)

}

function draw() {
  background(80,80,80);  


  if(car.x > 900){
    car.velocityX=0
car.shapeColor="Green"
wall.shapeColor="Red"




}
else{
  car.shapeColor="blue"
  wall.shapeColor="yellow"
}



  drawSprites();
}