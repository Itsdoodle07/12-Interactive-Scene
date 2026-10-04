// Project Title Bazinga (placeholder)
// Your Name(s) Nathan Bautista
// Date 9/23/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// varibles


// testing
let framechange = 0
let BIGtest = 1
// time varibles
let milseconds = 0
let seconds = 0
let minutes = 0
let secondsTEST = 0
let milsecondsTEST = 0
// attacks
let atack1 = true
let attack2 = true
// health
let health = 100
// kill
let death = false
let evilguydeath = false
// turn
let turnPlayer = true
// array's

// Player Img
let playerImg = []

// poo
async function setup() {
  //This function get run once at the start of the program
  createCanvas(800, 800);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  // player array
playerImg[0] = await loadImage('whoa cool2.png')
playerImg[1] = await loadImage('whoa cool.png')
playerImg[2] = await loadImage('whoa front.png')
  //Set the number of frames per second
  frameRate(60);
}
// Player model
function player(x,y){
image(playerImg[framechange],100,500,200,65)
// for frame chagning
if(mouseIsPressed === true && secondsTEST == BIGtest){
  framechange += 1
  BIGtest += 1
  
}

if(framechange == 3){
  framechange = 0
}
// time for changing
if(mouseIsPressed === true){
  milsecondsTEST = frameCount
}
  if (frameCount == 60){
frameCount = 0
  }
if (milsecondsTEST == 60){
    milsecondsTEST = 0
    secondsTEST += 1
  }
 
  
   text(milsecondsTEST, 50, 200);
   text(secondsTEST,100,200);
}



// these are like the people you kill or smt idk this is just a place holder
function evil_guys(x,y){

}


// ammo count 
function ammo(){

}


// this is like the lives you have and stuff yk yeah :D
function healthbar(){
   fill(200)
rect(300,100,100,20)
}




// this will be our first attack way
function attack1button1(){
while(turnPlayer == true){
fill('red')
rect(100,675,100,200)
if(mouseX >= 50 && mouseX <= 150 && mouseIsPressed == true && turnPlayer == true){
  ellipse(400,400,100,100)
}
}
}






// we will MAYBE use this for like trees and stuff
function back_lanscape(x,y){
  noStroke()
  fill ('black')
rect(x,y-300,800,100)
rect(x,y+450,800,400)
}


// this is will be our cooldown for weapons and or timed events
function timeORcooldown(){
  // will we use this for time

  // base for time
  milseconds = frameCount
  if (frameCount == 60){
frameCount = 0
  }
  // resets milseconds
  if (milseconds <= 60){
    seconds += 1
    milseconds = 0
  }
  // resets seconds
  if (seconds == 60){
    seconds = 0
    minutes += 1
  }


  // shows time
text(seconds,50,100)
text(minutes,100,100)
}



// where we draw stuff
function draw() {
  background('gray');
  back_lanscape(400,300)
  attack1button1()
  player(200,200)
  healthbar()

  timeORcooldown()
}
// key code thing
function keyPressed() {
  console.log(keyCode)
}
