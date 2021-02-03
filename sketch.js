var cat, catImg, catImg2, catImg3, catImg4;
var mouse, mouseImg, mouseImg2, mouseImg3, mouseImg4;
var garden, gardenImg;

function preload() {
    //load the images here
    catImg = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    catImg4 = loadAnimation("cat4.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
    mouseImg3 = loadImage("mouse3.png");
    mouseImg4 = loadImage("mouse4.png");
    gardenImg = loadImage("garden.png");

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(600,200,20,20);
    cat.addAnimation("catSitting", catImg);
    cat.addAnimation("catWalking", catImg2);
    cat.addAnimation("catTouched", catImg4);
    cat.scale=0.08;
    //cat.addImage(catImg);

    mouse = createSprite(400,200,20,20);
    //mouse.addImage(mouseImg);
}

function draw() {

    background("yellow");
    //Write condition here to evalute if tom and jerry collide

    keyPressed();
    touching();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyDown("left")) {
        cat.velocityX=-2;
        cat.changeAnimation("catWalking", catImg2);
    }

    // if(keyDown("right")) {
    //     cat.velocityX=2;
    //     cat.addAnimation("catRunning",catImg2);
    //     cat.changeAnimation("catRunning");
    // }
}

function touching() {

    if(cat.x-mouse.x <= mouse.width/2+cat.width/2 
      && mouse.x-cat.x <= mouse.width/2+cat.width/2) {
      cat.velocityX=0;
      cat.changeAnimation("catTouched", catImg4);
      mouse.shapeColor="red";
    }
  
    else {
      cat.shapeColor="blue";
      mouse.shapeColor="green";
    
    }
  }
