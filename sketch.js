var cat1Img,cat2Img,cat3Img,cat4Img;
var cat ,mouse;
var gardenImg;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;
var background;
function preload() {
    //load the images here
    cat1Img=loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png");
    gardenImg=loadImage("images/garden.png");
    mouse1Img=loadAnimation("images/mouse1.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600)
    cat.addAnimation("catSitting",cat1Img);
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addAnimation("mouse1Img",mouse1Img);
    mouse.scale=0.1;
}

function draw() {
  background(gardenImg);
  if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0;
    cat.x=300;
    cat.addAnimation("catStanding",cat3Img);
    cat.changeAnimation("catStanding",cat3Img);
    mouse.addAnimation("mouse3Img",mouse3Img);
    mouse.changeAnimation("mouse3Img",mouse3Img);
  }
  

   drawSprites();
}

  

  

function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse2Img);
    mouse.changeAnimation("mouseTeasing",mouse2Img);
    mouse.frameDelay = 25;
    cat.addAnimation("catRunning",cat2Img)
    cat.changeAnimation("catRunning",cat2Img)
    cat.velocityX = -2;

    }
    
}




