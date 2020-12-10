var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var ground;
var score;
var survivalTime = 0;


function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {
  createCanvas(600, 600);

  monkey = createSprite(50, 160, 20, 20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -6;
  ground.x = ground.width /2;
  console.log(ground.x)
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();


}




function draw() {
  background(220);
  
  if(ground.x<0) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
 food();
 spawnObstacles();
 
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time : " + survivalTime,100,50);

  
drawSprites();
}

function food() {
if(World.frameCount % 80 == 0){
  banana = createSprite(600,120,40,10);
  banana.addImage("banana",bananaImage);
  banana.y = Math.round(random(136,169));
  banana.velocityX = -3;
  banana.scale = 0.1;
  banana.lifetime = 200;
  bananaGroup.add(banana);
  
}
}

function spawnObstacles(){
if(frameCount % 300 === 0){
  obstacle = createSprite(600,310,10,40);
  obstacle.addImage("otry",obstacleImage);
  
 
  var rand = Math.round(random(1,6));
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.setLifetime = 50;
  
  obstacleGroup.add(obstacle);

  
 
}
}



  
    
