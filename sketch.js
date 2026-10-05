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
let attacktime = 0
// health
let health = 100
// kill
let death = false
let evilguydeath = false
// turn
let turnPlayer = true
let turnevilguy = false
// array's

// Player Img
let playerImg = []
let playerAttack1button

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
// button img
playerAttack1button = await loadImage('attackcard1.png')
  //Set the number of frames per second
  frameRate(60);
}
// Player model
function player(x,y){
image(playerImg[framechange],100,500,200,65)
}



// these are like the people you kill or smt idk this is just a place holder
function evil_guys(x,y){

}
// evil guy attack


function attackevil(){
    fill(0,200,0)
    rect(300,300,50,50)
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
image(playerAttack1button,100,675,150,200)
if(mouseX >= 25 && mouseX <= 175 && mouseIsPressed == true && turnPlayer == true){
  ellipse(300,300,50,50)
  attacktime += 1
}
if (attacktime == 20){
  attacktime = 0
  turnevilguy = true
   turnPlayer = false
}
}






// we will MAYBE use this for like trees and stuff
function back_lanscape(x,y){
  noStroke()
  fill ('black')
rect(x,y-300,800,100)
rect(x,y+450,800,400)
}
// where we draw stuff
function draw() {
  background('gray');
  back_lanscape(400,300)
  attack1button1()
  player(200,200)
  healthbar()

}
// key code thing
function keyPressed() {
  console.log(keyCode)
}
