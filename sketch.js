const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var gameState = "onSling";

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //Bottom Row.
  block1 = new Box(520,235,30,30);
  block2 = new Box(550,235,30,30);
  block3 = new Box(580,235,30,30);
  block4 = new Box(610,235,30,30);
  block5 = new Box(640,235,30,30);
  block6 = new Box(670,235,30,30);
  block7 = new Box(700,235,30,30);
  //Third Row.
  block8 = new Box(550,205,30,30);
  block9 = new Box(580,205,30,30);
  block10 = new Box(610,205,30,30);
  block11 = new Box(640,205,30,30);
  block12 = new Box(670,205,30,30);
  //Second Row.
  block13 = new Box(580,175,30,30);
  block14 = new Box(610,175,30,30);
  block15 = new Box(640,175,30,30);
  //Top.
  block16 = new Box(610,145,30,30);

  //Stand for the Blocks.
  stand = new Ground(610,255,280,15);
  //Top Wall.
  topWall = new Ground(400,0,800,30);
  //Side Walls.
  sideWall1 = new Ground(800,200,30,400);
  sideWall2 = new Ground(0,200,30,400);
  //Creates the Ground.
  ground = new Ground(400,400,800,30);

  hexagon = new Hexagon(200,150,30);
  chain = new Slingshot(hexagon.body,{x:200,y:150});

  Engine.run(engine);
}

function draw() {
  background(110,210,310);  
  
  //Creates the Hexagon.
  hexagon.display();

  //Creates the Constraint.
  chain.display();

  //Bottom Row.
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //third Row.
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  //Second Row.
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  //Top.
  fill("grey");
  block16.display();
  
  //Stand for Blocks.
  stand.display();

  //Top Wall.
  topWall.display();

  //Side Walls.
  sideWall1.display();
  sideWall2.display();
  //Creates the Ground.
  ground.display();
}

function mouseDragged(){
  if (gameState!=="launched"){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  chain.fly();
  //gameState = "launched";
}