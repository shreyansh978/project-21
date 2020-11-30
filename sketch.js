var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(223,321);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor=("white");
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;

  if(hascollided(bullet,wall)){
     bullet.velocityX=0;
     var damage=0.5*width*speed*speed/(thickness*thickness*thickness);
     if(damage>10){
     bullet.shapeColor=("green");
     }
      if(damage<10){
        bullet.shapeColor=("red");

      }
  }

  drawSprites();
}

function hascollided(bullet,wall){
 bulletRightEdge=bullet.x+bullet.width;
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true;
 }
   return false;
}

