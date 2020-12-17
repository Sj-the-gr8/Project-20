var car,wall,speed,weight,deformation;
function setup() {
  createCanvas(1000,400);
  car=createSprite(200, 200, 50, 50);
  car.shapeColor="white";
  car.velocityX=5;
  wall=createSprite(900,200,50,400);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");
  if(wall.x-car.x<(car.width+wall.width)/2)  {
    deformation=(0.5*weight*speed*speed)/22500;
    car.velocityX=0;
    if(deformation<=100)  {
      car.shapeColor=rgb(0,225,0);
    }
    else if(deformation>100 && deformation<180)  {
      car.shapeColor=rgb(230,230,0);
    }
    else if(deformation>=180)  {
      car.shapeColor=rgb(255,0,0);
    }
  }  
  console.log(car.shapeColor);
  text("Speed: "+speed,50,20);
  text("Weight: "+weight,50,40);
  text("Deformation: "+deformation,50,60);
  drawSprites();
}