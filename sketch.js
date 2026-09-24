// Project Title Bazinga (placeholder)
// Your Name(s) Nathan Bautista
// Date 9/23/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// varibles


// time varibles
let milseconds = 0
let seconds = 0
let minutes = 0
// attacks
let attack1 = true
let attack2 = true
// health
let health = 100
// kill
let death = false
let evilguydeath = false
// array's




function setup() {
  //This function get run once at the start of the program
  createCanvas(1300, 800);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(60);
}
// Player model
function player(x,y){

}



// these are like the people you kill or smt idk this is just a place holder
function evil_guys(x,y){

}


// ammo count 
function ammo(){

}


// this is like the lives you have and stuff yk yeah :D
function health(){

}


// we will MAYBE use this for like trees and stuff
function back_lanscape(x,y){
  noStroke()
  fill('gray')
rect(x,y,1300,700)
  fill ('black')
rect(x,y-300,1300,100)
rect(x,y+450,1300,400)
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
  if (milseconds == 60){
    milseconds = 0
    seconds += 1
  }
  // resets seconds
  if (seconds == 60){
    seconds = 0
    minutes += 1
  }


  // shows time
text(milseconds, 50, 50);
text(seconds,100,50)
text(minutes,200,50)
}



// where we draw stuff
function draw() {
  background(220);
  timeORcooldown()
  back_lanscape(650,300)
}
// key code thing
function keyPressed() {
  console.log(keyCode)
}
