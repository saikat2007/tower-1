var block,polygon

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  boxbaseSprite=createSprite(boxPosition.X,boxY,600,-30)
  boxbaseSprite.shapeColor=color(255,0,0);
  boxbaseBody=Bodies.rectangle(boxPosition-100,boxY,20,100,{isStatic:true})
  World.add(world,boxbaseBody)


  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11= new Block(420,235,30,40);
  block12= new Block(450,235,30,40);
  block13= new Block(360,235,30,40);
  block14= new Block(390,195,30,40);
  block15= new Block(420,195,30,40);
  block16 = new Block(390,195,30,40);

  
  
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