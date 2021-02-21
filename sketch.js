
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new Paper(100,100,40);
 dustbin1 = new Dustbin(1300,650,20,80);
 dustbin3 = new Dustbin(1390,650,20,80);
 dustbin2 = new Dustbin(1345,690,110,20);

 ground = new Ground(600,height,2000,20);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();

  ground.display();
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 100,y:-100});
	}
}

