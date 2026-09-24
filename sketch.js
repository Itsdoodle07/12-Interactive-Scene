// Project Title Bazinga (placeholder)
// Your Name(s) Nathan Bautista
// Date 9/23/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// varibles
let milseconds = 0
let seconds = 0
let minutes = 0
let stopOrstart = 1



// array's




function setup() {
  //This function get run once at the start of the program
  createCanvas(600, 400);
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

}


// this is will be our cooldown for weapons and or timed events
function timeORcooldown(){
  // will we use this for time
  // base for time
  if (frameCount == 60){
frameCount = 0
milseconds += stopOrstart
  }




  if (milseconds == 60){
    seconds += stopOrstart
    milseconds = 0
  }
  
  if (seconds == 60){
    minutes += stopOrstart
    seconds = 0
  }
text(milseconds, 50, 50);
text(seconds,100,50)
text(minutes,200,50)
if (keyIsDown(82)){
stopOrstart = 0
}
}




function draw() {
  background(220);
  timeORcooldown()
}
