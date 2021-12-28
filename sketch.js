var fundo;
var jaxon;
var refri;
var parede1;
var parede2;
var fundoImg;
var jaxonImg;


function preload(){
  //imagens pré-carregadas
  fundoImg = loadImage("path.png");
  jaxonImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui

  fundo = createSprite(199,200,);
  fundo.addImage(fundoImg);
  fundo.velocityY = 4;
  jaxon = createSprite(180,345,30,30);
  jaxon.addAnimation("jaxon", jaxonImg);
  jaxon.scale=0.06;

  parede1=createSprite(0.50,0,100.50,1000);
  parede2=createSprite(399.50,0,100.50,1000);
  parede1.invisible = true;
  parede2.invisible = true;
}

function draw() {
  jaxon.x = World.mouseX;
  jaxon.collide(parede1);
  jaxon.collide(parede2);
  
  fundo.velocityY = 5;
  if(fundo.y > 503.50){
    fundo.y = height/2;
  }
  background(0);
  drawSprites();
}