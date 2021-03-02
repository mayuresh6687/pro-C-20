var back; 
var tomImg1,tomImg2,tomImg3;
var cat,mouse;


function preload() {

 //cat=loadAnimation("images/cat1.png");

  bgs = loadImage("images/garden.png");
  tomImg1= loadImage("images/cat1.png");
  tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
  tomImg3= loadAnimation("images/cat4.png");

  jerryImg1=loadImage("images/mouse1.png");
  jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
  jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(980,700);
     bg=createSprite(500,450);
     bg.addImage(bgs);
     bg.scale=1.0
    //create tom and jerry sprites here
    tom=createSprite(800, 500, 70, 70);
    tom.addImage(tomImg1);
    tom.scale=0.2

    mouse = createSprite(200, 500, 70, 70);
    mouse.addImage(jerryImg1);
    mouse.scale = 0.15;
    
}

function draw() {

    background(255)
    //Write condition here to evalute if tom and jerry collide
    

    tom.depth = bg.depth;
    tom.depth = tom.depth + 1;

    mouse.depth = mouse.depth;
    mouse.depth = mouse.depth + 1;

    keyPressed(); 
    drawSprites();

    fill("yellow");
    textSize(20);
    text("PRESS LEFT ARROW FOR ACTION", 350, 350);
    text(mouseX + ',' + mouseY, 10, 45);


    
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown(LEFT_ARROW)){
    tom.velocityX = -5;
    tom.addAnimation("catRunning", tomImg2);    
    tom.changeAnimation("catRunning");
    mouse.addAnimation("jerryTeasing", jerryImg2);    
    mouse.changeAnimation("jerryTeasing");
  }

  if(tom.x - mouse.x < (tom.width - mouse.width)/2){
    tom.addAnimation("tomStanding", tomImg3);
    tom.changeAnimation("tomStanding");
    tom.x = 320;
    tom.velocityX = 0;
    mouse.addAnimation("jerrySearching", jerryImg3);    
    mouse.changeAnimation("jerrySearching");
  }

}