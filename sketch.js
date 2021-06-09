var ship,shipImg1,edges;
var seaImg;
function preload(){
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(100,200,20,20)
  ship.addAnimation("shipImg1",ship)
  edges = createEdgeSprite();
sea=createSprite(400,200,600,20)
  sea.addImage(seaImg)
}

function draw() {
  background("blue");
 
}