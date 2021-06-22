
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var bob1,bob2,bob3,bob4,bob5
function preload()
{
	
}

function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
 ground= new Ground(200,50,200,20)
 bob1= new Bob(100,100,20)
 rope1=new Rope(bob1.body,{x:100,y:50})
 bob2= new Bob(150,100,20)
 rope2=new Rope(bob2.body,{x:150,y:50})
 bob3= new Bob(200,100,20)
 rope3=new Rope(bob3.body,{x:200,y:50})
 bob4= new Bob(250,100,20)
 rope4=new Rope(bob4.body,{x:250,y:50})
 bob5= new Bob(300,100,20)
 rope5=new Rope(bob5.body,{x:300,y:50})
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()
  bob1.display()
  rope1.display()
  bob2.display()
 rope2.display()
 bob3.display()
 rope3.display()
 bob4.display()
 rope4.display()
 bob5.display()
 rope5.display()
}

function keypressed(){
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:-30})
    
 }
}