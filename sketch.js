var wall,bullet;
var thickness,weight,speed;

function setup() {
  createCanvas(1200,800);
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50,200,50,50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall.shapeColor = "white";
  car.shapeColor = "white";
}

function draw() {
  background("black");  
  car.velocityX = speed;  

  rectMode(CENTER);
  hasCollided();
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge>=WallLeftEdge)
 {
    return true;
 }
 return false;
}
if(hasCollided(bullet,wall))
{
   bullet.velocityX =0;
   var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

   if(damage > 10)
   {
      wall.shapeColor = color(255,0,0);
   }

   if(damage < 10)
   {
      wall.shapeColor = color(0.255,0);
   }
}