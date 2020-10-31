var myself
var cp,cp1,myself1,carrot,wolf
var enemy1group,enemy2group


function preload(){
  cp1 = loadImage("rabbit.png")
  myself1 = loadImage("rabbit2.png")
  carrot1 = loadImage("c1.png")
  wolf1 = loadImage("w1.png");
squirrel1 = loadImage("squirrel.png");
  bg1 = loadImage("grass bg.jpeg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  var background = createSprite(displayWidth,displayHeight);
  background.addImage(bg1);
 myself =  createSprite(displayWidth/2,displayHeight/2+200, 50, 50);
 cp = createSprite(displayWidth/2,displayHeight/2-330,50,50);
 carrot = createSprite(200,200,10,10);
 carrot.scale =0.2;
 carrot.visible = false;
 carrot.addImage(carrot1);
 cp.addImage(cp1);
 cp.scale = 0.5
 myself.addImage(myself1);
myself.scale = 0.5
enemy1group = new Group ();
enemy2group = new Group ();

}

function draw() {
  background(0);  
  if(keyDown ("right")){ 
    myself.x = myself.x+10;
    cp.x = cp.x-10
  }
  if (keyDown("left")){
    myself.x = myself.x -10;
    cp.x = cp.x+10
  }
  if (keyDown("up")){
    carrot.x = cp.x;
    carrot.y = cp.y;
    carrot.velocityY = 5;
    carrot.visible = true;
  }
  if(keyDown("down")){
    carrot.x = myself.x;
    carrot.y = myself.y;
    carrot.velocityY = -5;
    carrot.visible = true;
  }
 

for(var i = 0;i < enemy1group.length;i++){
  if(enemy1group.isTouching(carrot)){
    enemy1group.get(i).destroy();
  }
 }
 for(var a = 0; a < enemy2group.length;a++){
  if(enemy2group.isTouching(carrot)){
    enemy2group.get(a).destroy();
  }
 }
  drawSprites();
  createEnemies();
}

function createEnemies(){
if(frameCount%200 === 0){
  var enemy = createSprite(displayWidth-50,displayHeight/2,10,10);
enemy.velocityX = -2;
enemy.addImage(wolf1);
enemy.scale = 0.2;
enemy1group.add(enemy);
}
if(frameCount%120===0){
  var enemy2 = createSprite(displayWidth-1400,displayHeight/2-100,10,10);
  enemy2.velocityX = 2;
enemy2.addImage(squirrel1);
enemy2.scale = 0.3;
enemy2group.add(enemy2);
}


}


