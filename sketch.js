
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball.body = Matter.Body.circle(500, 200, 20, [ball_options], [20]);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  groundObj=new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  rightSide = new Ground(1600,600,20,120);

  keyPressed();

  Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		ball = Matter.Body,applyForce(ball.body, ball_options, 20);
	}
}



