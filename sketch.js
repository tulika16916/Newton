var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,b1,r,b2,c1,c2,b3,b4,c3,c4;
var d=40
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     var startx=width/2

	engine = Engine.create();
	world = engine.world;

	b1= new Bob(startx-d*2,200,30);
	b1.shapeColor="red"
	b2=new Bob(startx-d,200,30);
	b3=new Bob(startx,200,30);
	b4=new Bob(startx+d,200,30);
	b5=new Bob(startx+d*2,200,30);
	r= new Roof(250,200,200,30)
	c1=new Chain(b1.body,r.body,-2*d,0)
	c2=new Chain(b2.body,r.body,-1*d,0)
	c3=new Chain(b3.body,r.body,0,0)
	c4=new Chain(b4.body,r.body,1*d,0)
    c5=new Chain(b5.body,r.body,2*d,0)

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Pink");
 
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 r.display();
 c1.display();
 c2.display()
 c3.display()
 c4.display()
 c5.display()
 b5.display()

}

function mouseDragged(){
	Matter.Body.setPosition(b4.body,{x:mouseX,y:mouseY})
 }
 
 
 function mouseDragged(){
	Matter.Body.setPosition(b5.body,{x:mouseX,y:mouseY})
 }
 function mouseDragged(){
	Matter.Body.setPosition(b3.body,{x:mouseX,y:mouseY})
 }
 function mouseDragged(){
	Matter.Body.setPosition(b2.body,{x:mouseX,y:mouseY})
 }
 function mouseDragged(){
	Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY})
 }
 