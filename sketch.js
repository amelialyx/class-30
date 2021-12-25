const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bunny;
var ground;
var fruit,rope;
var fruit_con;
var backgroundImage,food,rabbit;
var button;

function preload(){
  backgroundImage = loadImage("background.png");
  food = loadImage("melon.png");
  rabbit = loadImage("Rabbit-01.png");
}
function setup() {
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
  bunny = createSprite(250,630,100,100);
  bunny.addImage(rabbit);
  bunny.scale= 0.2;
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);
  button=createImg("cut_btn.png");
  button.position(220,30);
  button.size(50,60);
  button.mouseClicked(drop);
  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER); 
}

function draw() {
  background(51);
  image(backgroundImage,250,350,500,700);
  rope.show();
  image(food,fruit.position.x, fruit.position.y,60,60);
  Engine.update(engine);
  ground.show();

 
  drawSprites();
}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con=null;
}