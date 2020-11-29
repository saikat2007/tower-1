

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground,stand1,stand2,slingshot,polygon_img
function preload(){
  polygon_img=loadImage("polygon.png")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 Engine.run(engine)
ground=new Ground();
stand1=new Stand(390,300,250,10)
stand2=new Stand(700,200,200,10)
slingShot=new SlingShot(this.ball,{x:100,y:200})
 


  block1 = new Block(330,235,30,40);
  block2= new Block(360,235,30,40);
  block3= new Block(390,235,30,40);
  block4= new Block(420,235,30,40);
  block5= new Block(450,235,30,40);
  block6= new Block(360,235,30,40);
  block7= new Block(390,195,30,40);
  block8= new Block(420,195,30,40);
  block9 = new Block(390,195,30,40);

}
function draw (){

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  slingshot.display();
  block.display();
  ground.display();
  stand.display();


}
  
  function mouseDragged(){
   
         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   
 }
 
 
 function mouseReleased(){
     slingshot.fly();
     gameState = "launched";
 }
 
 function keyPressed(){
     if(keyCode === 32){
         bird.trajectory=[]
         Matter.Body.setPosition(polygon.body,{x:200,y:50})
        slingshot.attach(polygon.body);
     }
 }
  






function draw() {
  background(255,255,255);  
  drawSprites();





}


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    
     Matter.Body.setStatic(packageBody,false)
   }
 }