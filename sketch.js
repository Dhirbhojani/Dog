var dog
//Create variables here

function preload()
{
  dog1=loadImage("images/dogImg.png")
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
  dog = createSprite(400,400)
  dog.addImage(dog1)
}


function draw() {  


  dog.display();
  drawSprites();
  //add styles here

}



