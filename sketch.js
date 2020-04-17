const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "start";
var score = 0;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,590,1200,20);
  ground1 = new Ground(600,10,1200,20);
  ground2 = new Ground(1000,250,300,20);
  // first layer
  block1 = new Box1(600,560,20,40);
  block2 = new Box2(580,560,20,40);
  block3 = new Box3(620,560,20,40);
  block4 = new Box4(560,560,20,40);
  block5 = new Box1(660,560,20,40);
  block6 = new Box2(640,560,20,40);
  block7 = new Box3(700,560,20,40);
  block8 = new Box4(680,560,20,40);
  // second layer
  block9 = new Box1(630,520,20,40);
  block10 = new Box2(610,520,20,40);
  block11 = new Box3(570,520,20,40);
  block12 = new Box4(590,520,20,40);
  block13 = new Box4(650,520,20,40);
  block14 = new Box3(670,520,20,40);
  block15 = new Box2(690,520,20,40);
  // third layer
  block16 = new Box1(580,480,20,40);
  block17 = new Box1(660,480,20,40);
  block18 = new Box2(640,480,20,40);
  block19 = new Box3(600,480,20,40);
  block20 = new Box4(620,480,20,40);
  block21 = new Box4(680,480,20,40);
  // fourth layer
  block22 = new Box1(610,440,20,40);
  block23 = new Box2(590,440,20,40);
  block24 = new Box3(630,440,20,40);
  block25 = new Box2(670,440,20,40);
  block26 = new Box4(650,440,20,40);
  // fifth layer
  block27 = new Box1(640,400,20,40);
  block28 = new Box3(660,400,20,40);
  block29 = new Box3(600,400,20,40);
  block30 = new Box4(620,400,20,40);

  block31 = new Box1(610,360,20,40);
  block32 = new Box2(630,360,20,40);
  block33 = new Box4(650,360,20,40);

  block34 = new Box3(620,320,20,40);
  block35 = new Box1(640,320,20,40);

  block36 = new Box2(630,280,20,40);
  
  block37 = new Box4(810,560,20,40);
  block38 = new Box3(790,560,20,40);
  block39 = new Box2(830,560,20,40);
  block40 = new Box3(870,560,20,40);
  block41 = new Box1(850,560,20,40);

  block42 = new Box4(840,520,20,40);
  block43 = new Box2(860,520,20,40);
  block44 = new Box2(800,520,20,40);
  block45 = new Box1(820,520,20,40);

  block46 = new Box4(810,480,20,40);
  block47 = new Box3(830,480,20,40);
  block48 = new Box1(850,480,20,40);

  block49 = new Box2(820,440,20,40);
  block50 = new Box4(840,440,20,40);

  block51 = new Box3(830,400,20,40);
  
  block52 = new Box2(960,220,20,40);
  block53 = new Box1(980,220,20,40);
  block54 = new Box4(1000,220,20,40);
  block55 = new Box1(1040,220,20,40);
  block56 = new Box3(1020,220,20,40);

  block57 = new Box2(1010,180,20,40);
  block58 = new Box4(1030,180,20,40);
  block59 = new Box4(970,180,20,40);
  block60 = new Box3(990,180,20,40);

  block61 = new Box2(980,140,20,40);
  block62 = new Box1(1000,140,20,40);
  block63 = new Box3(1020,140,20,40);

  block64 = new Box4(990,100,20,40);
  block65 = new Box2(1010,100,20,40);

  block66 = new Box1(1000,60,20,40);
  
  stone = new Stone(200,400,50,50);
  slingshot = new Slingshot(stone.body,{x:200,y:400});

}

function draw() {
  engine.world.gravity.y = 0.25;
  Engine.update(engine);
  background(0); 
  ground.display();
  ground1.display();
  ground2.display();

  block1.display();
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
  
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block31.display();
  block32.display();
  block33.display();

  block34.display();
  block35.display();

  block36.display();

  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();

  block42.display();
  block43.display();
  block44.display();
  block45.display();

  block46.display();
  block47.display();
  block48.display();

  block49.display();
  block50.display();

  block51.display();

  block52.display();
  block53.display();
  block54.display();
  block55.display();
  block56.display();

  block57.display();
  block58.display();
  block59.display();
  block60.display();

  block61.display();
  block62.display();
  block63.display();

  block64.display();
  block65.display();

  block66.display();
  
  stone.display();
  slingshot.display();
  fill(255);
  textSize(20);
  strokeWeight(1);
  text("Tries:"+score,50,50)
  
}
class Stone{
  constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          frictionAir :0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0,this.width,this.width);
      pop();
    }
}
function mouseDragged(){
  if(gameState !== "play"){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
}
function mouseReleased(){
  slingshot.fly();
  gameState = "play";
  score++;
}
function keyPressed(){
  if (keyCode === 32 ){
    gameState = "start";
    Matter.Body.setPosition(stone.body,{x:200,y:400});
    slingshot.attach(stone.body);
    }
    
}
