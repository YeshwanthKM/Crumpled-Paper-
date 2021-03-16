
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj1;
var groundObject1;
var groundObject2;
var groundObject3;
var groundObject4;
var world;
var paper1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject1 = new ground(800,670,1560,20);
	groundObject2 = new ground(1570,350,20,660);
	groundObject3 = new ground(800,30,1560,20);
	groundObject4 = new ground(30,350,20,660);
	dustbinObj1 = new dustbin(1200,650);
	paper1 = new Paper(150,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  dustbinObj2 = loadImage("dustbingreen.png");
 
  groundObject4.display();
  groundObject3.display();
  groundObject2.display();
  groundObject1.display();
  dustbinObj1.display();
  paper1.display();

}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-400});

	}
}
