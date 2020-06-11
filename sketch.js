
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,player;
var bg;
var boy;
var boy_img;
var ground;
var virus,virus_img;

//to load the images
function preload(){
  bg = loadImage("images/bg.jpg");
  boy_img = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png","images/boy8.png","images/boy9.png","images/boy10.png");
  virus_img = loadImage("images/virus.png")
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create()
  world = engine.world;
  player = createSprite(100,300,50,50);
  player.addAnimation("player",boy_img)
  player.scale=0.6;

  ground = createSprite(600,390,1200,20);
  ground.visible = false;

  virus = createSprite(30,300,30,30);
  virus.addImage("virus",virus_img);
  deltaX = 0;
  deltaY = 0;
}

function draw() {
  background(bg); 
  Engine.update(engine) 

  if(keyDown("space")){
    player.velocityY=-4;
}
  player.velocityY=player.velocityY+1;
  player.collide(ground);

  if(keyDown(RIGHT_ARROW)){
    player.velocityX=6;
  }
  else{
    player.velocityX=0;
  }
  
  drawSprites();
}


function follow(follower,followed,velocity){
   deltaX = followed.x-follower.x;
   deltaY = followed.y-follower.y;
var followerAngle = Math.atan(deltaY/deltaX);
 if(deltaX<0){
  followerAngle = followerAngle+Math.PI
 }
 follower.velocityX = velocity*cos(followerAngle)
 follower.velocityX = velocity*sin(followerAngle)
}



