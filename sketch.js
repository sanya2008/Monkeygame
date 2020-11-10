
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivaltime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(52,330,20,20)
  monkey.addAnimation("monkey_running", monkey_running)
monkey.scale=0.10
  
  ground=createSprite(6,365,800,10)
  ground.velocityX=-4
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {

  background("white")
  drawSprites();
  ground.x=ground.width/2
  
  monkey.collide(ground)
 if(keyDown("space")&& monkey.y>= 100){
   monkey.velocityY=-4
 }
  monkey.velocityY=monkey.velocityY + 0.150
  bananas();
  obstacles();
 
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time="+survivaltime,124,32)
  
}
function bananas(){
  if(frameCount%80===0){
     var banana=createSprite(398,182,20,20)
    banana.y=Math.round(random(120,250))
    banana.addImage("bananaImage",bananaImage)
    banana.velocityX=-5
    banana.scale=0.10
    banana.lifetime=70
    FoodGroup.add(banana)
     }
  
  
}

function obstacles(){
if(frameCount%300===0){
  var obstacle=createSprite(397,340,20,20)
  obstacle.addImage("obstacleImage",obstacleImage)
  obstacle.velocityX=-5
  obstacle.scale=0.10
  obstacle.lifetime=90
  obstacleGroup.add(obstacle)
}



}






