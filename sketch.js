var FixedRect,MovingRect;

function setup() {
  createCanvas(1200,800);
  FixedRect=createSprite(400, 200, 50, 80);
  FixedRect.shapeColor="green";
  FixedRect.debug=true;
  MovingRect=createSprite(200,200,80,30);
  MovingRect.shapeColor="green";
  MovingRect.debug=true;
}

function draw() {
  background(0);  
  MovingRect.x=World.mouseX;
  MovingRect.y=World.mouseY;
  if(MovingRect.x-FixedRect.x<MovingRect.width/2+FixedRect.width/2&&FixedRect.x-MovingRect.x<MovingRect.width/2+FixedRect.width/2
    &&MovingRect.y-FixedRect.y<MovingRect.height/2+FixedRect.height/2&&FixedRect.y-MovingRect.y<MovingRect.height/2+FixedRect.height/2){
    FixedRect.shapeColor="red";
    MovingRect.shapeColor="red";
  }
  else{
    FixedRect.shapeColor="green";
    MovingRect.shapeColor="green";
  }
  drawSprites();
}