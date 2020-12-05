
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	
bob1=new Pendulum(300,350,50);

bob2=new Pendulum(350,350,50);

bob3=new Pendulum(400,350,50);

bob4=new Pendulum(450,350,50);

bob5=new Pendulum(500,350,50);

  roof1 = new Handle(400,100,300,40);
  sling1= new Sling(bob1.body,roof1.body,-50*2,0);
  sling2= new Sling(bob2.body,roof1.body,-25*2,0);
  sling3= new Sling(bob3.body,roof1.body,-0*2,0);
  sling4= new Sling(bob4.body,roof1.body,25*2,0);
  sling5= new Sling(bob5.body,roof1.body,50*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  background("white");
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob6.display();
  roof1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  //sling6.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 




