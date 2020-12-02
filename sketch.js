const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint; 


var block;
var polygon;

var engine,world;
var poly_img;
var score=0;


function preload(){

  poly_img=loadImage("polygon.png");

}

function setup() {
  createCanvas(1600,800);
 // stroke(255)
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

 

   
  floor1=new Ground(600,600,400,20);
  block=new Block(600,550,50,50,126,103,82);
  block2=new Block(650,550,50,50,126,103,82);
  block3=new Block(700,550,50,50,126,103,82);
  block4=new Block(550,550,50,50,126,103,82);
  block5=new Block(500,550,50,50,126,103,82);
  block6=new Block(450,550,50,50,126,103,82);
  block7=new Block(750,550,50,50,126,103,82);

  block8=new Block(550,500,50,50,97,178,146);
  block9=new Block(500,500,50,50,97,178,146);
  block10=new Block(700,500,50,50,97,178,146);
  block11=new Block(600,500,50,50,97,178,146);
  block12=new Block(650,500,50,50,97,178,146);

  block13=new Block(650,450,50,50,174,208,158);
  block14=new Block(600,450,50,50,174,208,158);
  block15=new Block(550,450,50,50,174,208,158);

  block26=new Block(600,400,50,50,244,238,192);

  floor2=new Ground(1200,300,300,20);

  block16=new Block(1200,250,50,50,97,178,146);
  block17=new Block(1250,250,50,50,97,178,146);
  block18=new Block(1300,250,50,50,97,178,146);
  block19=new Block(1150,250,50,50,97,178,146);
  block20=new Block(1100,250,50,50,97,178,146);

  block21=new Block(1200,200,50,50,174,208,158);
  block22=new Block(1250,200,50,50,174,208,158);
  block23=new Block(1150,200,50,50,174,208,158);

  ground=new Ground(800,780,1600,20)

  block24=new Block(1200,150,50,50,244,238,192);
  polygon=Bodies.circle(100,600,20,{density:0.02});
  World.add(world,polygon);

  launcher = new Polygon(this.polygon,{x:150,y:500});

}

function draw() {
  background(32,40,63);  
  
  textSize(35);
  stroke("pink")
  text("SCORE:"+score,50,50);
 
  floor1.display();
  ground.display();
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block26.display();
  floor2.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  imageMode(CENTER);
  image(poly_img,polygon.position.x,polygon.position.y,50,50);

  block.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block26.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();

  launcher.display();

}

function mouseDragged()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
} 

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
  if (keyCode===32){
     Matter.Body.setPosition(this.polygon,{x:150,y:500});
     launcher.attach(this.polygon);
  }
}