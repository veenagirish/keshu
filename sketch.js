var spacecraft, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var bg;
var iss, issImage;
var hasDocked;
hasDocked = false;

function preload(){
   spacecraft1Img=loadImage("spacecraft1.png");
   spacecraft2Img=loadImage("spacecraft2.png");
   spacecraft3Img=loadImage("spacecraft3.png");
   spacecraft4Img=loadImage("spacecraft4.png");
   bg=loadImage("spacebg.jpg");
   issImage=loadImage("iss.png");
}

function setup() {
  createCanvas(600,400);

  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
  iss.scale=0.5;

  spacecraft=createSprite(285,240,50,50);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale=0.25;
}

function draw() {
  background(bg);
  spacecraft.addImage(spacecraft1Img);

  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x=spacecraft.x-2;
    }
  }
}