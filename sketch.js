var background1;
var football;
var soccer;
var basketball;
var football1;
var soccer1;
var basketball1;
var title1;
var basketball_list;
var next_button1;
var nextbutton;
var nextbuttoncount = 0;
var basketball_imagegroup;


function preload(){
  background1 = loadImage("background1.jpg");
  soccer1 = loadImage("soccer.png");
  football1 = loadImage("football.png");
  basketball1 = loadImage("basketball.png");
  next_button1 = loadImage("Nextbutton.jpg");

  
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  title1 = createElement("h1");
  title1.html("Hello, what sport would you like to train");
  title1.position(windowWidth/2,windowHeight/2);

  football = createSprite(250,250,40,40);
  football.addImage(football1);
  football.scale = 0.2;

  soccer = createSprite(500,250,40,40);
  soccer.addImage(soccer1);
  soccer.scale = 0.1;

  basketball = createSprite(400,500,40,40);
  basketball.addImage(basketball1);
  basketball.scale = 0.1;



}

function draw(){
  background("white");

  footballpage();
  soccerpage();
  drawSprites();
}

function footballpage(){
  if(mousePressedOver(football)){
    football.visible = false;
    soccer.visible = false;
    basketball.visible = false;
    title1.html('');
    basketball_list = [background1, soccer1];
    
    nextbutton = createSprite(300,500,40,40);
    
    //nextbutton.addImage(next_button1);
    //nextbutton.scale = 0.02;

    //nextbuttoncount = 0;
    basketball_imagegroup = createSprite(900,500,40,40);
    basketball_imagegroup.addImage(basketball_list[0]);
    basketball_imagegroup.scale = 1.3;
    nextbuttonpress();
 }
}



function soccerpage(){
  if(mousePressedOver(soccer)){
    football.visible = false;
    basketball.visible = false;
    soccer.visible = false;
    title1.html(' ');

  }

}
function nextbuttonpress(){
  if(mousePressedOver(nextbutton)){
    //nextbuttoncount = 0;
    nextbuttoncount +=1;
    console.log(nextbuttoncount);
    //basketball_imagegroup.changeImage(basketball_list[1]);

  }
}
