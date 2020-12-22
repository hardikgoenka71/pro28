
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var treeimg,boyimg;

function preload()
{
  boyimg=loadImage("sprites/boy.png")
    

	treeimg=loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1350, 550);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
ground1=new ground(675,550,1350,10)
mango1=new mango(1150,150,80)
stone1=new stone(143,348,50,50)
sling = new slingshot(stone1.stone,{x:143,y:348});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255);
  
  image(boyimg,100,240,250,400)
  image(treeimg,950,10,400,550)
  ground1.display()
 
  mango1.display();
  stone1.display();
  strokeWeight(4);
  sling.display();
  

 
}

  function mouseDragged(){
    Matter.Body.setPosition(stone1.stone,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
 
}
