
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var a

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
a = new s(100,630)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
 

  groundObject.display();
  dustbinObj.display();
a.display()
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    console.log("aa")
      Matter.Body.applyForce(a.body,a.body.position,{x:130,y:-145})
  }
}