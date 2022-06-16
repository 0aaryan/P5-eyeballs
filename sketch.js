//import MatterJS from "matter";

var outterImg,innerImg;

function preload() {
  outterImg=loadImage('/imgs/6.png');
  innerImg=loadImage('/imgs/inner2.png');
}






var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
var engine = Engine.create();
var runner = Runner.create();
var w = window.innerWidth;
var h = window.innerHeight;  

var pink,black,white,glass;
var eyeBalls=[];
var ground,wall1,wall2;

function setup() {
  //canvas
  canvas=createCanvas(w, h);



  //colors
  red=color(255,0,0);
  pink=color(233,14,99);
  white=color(255,255,255);
  glass=color(199,227,225 );


  //components
  ground=new Box(w/2,0.9*h,0.4*w,15,glass,{isStatic:true});
  wall1=new Box(0.3*w,0.7*h,15,0.4*h,glass,{isStatic:true});
  wall2=new Box(0.7*w,0.7*h,15,0.4*h,glass,{isStatic:true});
  Runner.run(runner, engine);
}

function draw() {
  background(0);

  wall1.show();
  wall2.show();
  ground.show();
  for(var i=0;i<eyeBalls.length;i++){
    eyeBalls[i].move();
    eyeBalls[i].show();
    if(!eyeBalls[i].isVisible()){
      eyeBalls.splice(i,1);
    }
  }
}

window.onresize = function() {
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);
}

function mouseClicked(){
  
  eyeBalls.push(new eyeBall(mouseX,mouseY,50,25,white))
}