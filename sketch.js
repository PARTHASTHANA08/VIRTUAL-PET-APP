//Create variables here
var database;
var dogi,happyDogi;
var foodS,foodStock;
function preload()
{
  //load images here
  dogi = loadImage("dogImg.png");
  happyDogi = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  dog = createSprite(400,500,10,10);
  dog.addImage(dogi);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",food);
}


function draw() { 
  background("lightGreen"); 
if(keyWentDown(UP_ARROW)){
  foodCount(foodS);
  dog.addImage(happyDogi);
  foodS -= 1;
}

textSize(25);
textFont("callestar");
fill("darkBlue"); 
stroke(200);
text("PRESS THE UP ARROW TO FEED THE DOG",150,50);
text("FOOD REMAINING: " + foodS,300,300) 

drawSprites();
  //add styles here

}
function food(data){
  foodS = data.val();
}
function foodCount(x){
  database.ref('/').update({
    Food:x
  })
}


