var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(800,800);
  //fixedRect = createSprite(600, 400, 50, 80);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1=createSprite(400,400,100,20);
  gameobject1.shapeColor="red";
  gameobject2=createSprite(700,400,50,90);
  gameobject2.shapeColor="yellow";
  gameobject3=createSprite(10,200,20,150);
  gameobject3.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  gameobject1.velocityX=-4;
  gameobject1.velocityY=-4;
  gameobject2.velocityX=+4;
  gameobject2.velocityY=+4;

  BounceOff(gameobject1,gameobject2);
  drawSprites();
}
