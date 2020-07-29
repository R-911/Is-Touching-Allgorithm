var movingRect, fixedRect;
function setup() { 
  createCanvas(800,400); 
  fixedRect = createSprite(400, 200, 80, 40); 
  fixedRect.shapeColor = "green"; 
  movingRect = createSprite(300,100,30,50); 
  movingRect.shapeColor = "green"; 
} 
function draw() { 
  movingRect.y = mouseY; 
  movingRect.x = mouseX; 
  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2 
    && fixedRect.x - movingRect.x <=movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2 
      && fixedRect.y - movingRect.y <=movingRect.height/2+fixedRect.height/2)
    {
       movingRect.shapeColor = "red"; 
    fixedRect.shapeColor = "red"; } 
  else { movingRect.shapeColor = "green"; 
  fixedRect.shapeColor = "green"; 
 }
  background(255,255,255); 
  drawSprites(); 
}


