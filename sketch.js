// Project Title Bazinga (placeholder)
// Your Name(s) Nathan Bautista
// Date 9/23/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// varibles


// frames
let framechange = 0
let framchangeevilguy = 0
// attacks
let atack1 = true
let attack2 = true
let attacktime = 0
let hitormissplayer = 0
let hitormissevil = 0
// health
let health = 100
let evilguyHealth = 100
// kill
let death = false
let evilguydeath = false
// turn
let turnPlayer = true
let turnevilguy = false
// restart
let restartGame = false
// array's

// Player Img
let playerImg = []
let playerAttack1button
let playerAttack2button
// evilguy img
let evilguyImg = []


async function setup() {
  //This function get run once at the start of the program
  createCanvas(800, 800);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  // player array
playerImg[0] = await loadImage('player still 1.png')
playerImg[1] = await loadImage('player still 2.png')
playerImg[2] = await loadImage('player still 1.png')
playerImg[3] = await loadImage('player still 1.png')
// slice attack array
playerImg[4] = await loadImage('slice1.png')
playerImg[5] = await loadImage('slice2.png')
playerImg[6] = await loadImage('slice3.png')
playerImg[7] = await loadImage('slice4.png')
playerImg[8] = await loadImage('slice5.png')
playerImg[9] = await loadImage('slice6.png')
playerImg[10] = await loadImage('slice7.png')
playerImg[11] = await loadImage('slice8.png')
playerImg[12] = await loadImage('slice9.png')
playerImg[13] = await loadImage('slice10.png')
playerImg[14] = await loadImage('slice11.png')
playerImg[15] = await loadImage('slice12.png')
playerImg[16] = await loadImage('slice13.png')
// shoot attack array
playerImg[17] = await loadImage('shoot1.png')
playerImg[18] = await loadImage('shoot2.png')
playerImg[19] = await loadImage('shoot3.png')
playerImg[20] = await loadImage('shoot4.png')
playerImg[21] = await loadImage('shoot5.png')
playerImg[22] = await loadImage('shoot6.png')
playerImg[23] = await loadImage('shoot7LOOPSTART.png')
playerImg[24] = await loadImage('shoot8REPEAT.png')
playerImg[25] = await loadImage('shoot9REPEAT.png')
playerImg[26] = await loadImage('shoot8REPEAT.png')
playerImg[27] = await loadImage('shoot9REPEAT.png')
playerImg[28] = await loadImage('shoot8REPEAT.png')
playerImg[29] = await loadImage('shoot9REPEAT.png')
playerImg[30] = await loadImage('shoot10.png')
playerImg[31] = await loadImage('shoot11.png')
playerImg[32] = await loadImage('shoot12.png')
// button imgs
playerAttack1button = await loadImage('attackcard1.png')
playerAttack2button = await loadImage('attackcard2.png')



// evilguy imgs
evilguyImg[0] = await loadImage('evilguy shooting1.png')
evilguyImg[1] = await loadImage('evilguy shooting2.png')
evilguyImg[2] = await loadImage('evilguy shooting3.png')
evilguyImg[3] = await loadImage('evilguy shooting4.png')
evilguyImg[4] = await loadImage('evilguy shooting5.png')
evilguyImg[5] = await loadImage('evilguy shooting6.png')
evilguyImg[6] = await loadImage('evilguy shooting5.png')
evilguyImg[7] = await loadImage('evilguy shooting6.png')
evilguyImg[8] = await loadImage('evilguy shooting5.png')
evilguyImg[9] = await loadImage('evilguy shooting6.png')
evilguyImg[10] = await loadImage('evilguy shooting7.png')
evilguyImg[11] = await loadImage('evilguy shooting8.png')


  //Set the number of frames per second
  frameRate(15);
}
// Player model
function player(){
image(playerImg[framechange],100,400)
// health
fill(200)
rect(100,250,130,25)
fill(200,0,0)
rect(100,250,health,20)

}

function winOrlose(){
  if(health <= 0){
    
    fill("red")
    rect(400,400,800,800)
    fill('black')
     text ("unlucky",400,400)
     text ("R to restart",400,500)
   restartGame = true
 turnPlayer = false
 turnevilguy = false
  }
  else if(evilguyHealth <= 0){
    restartGame = true
    fill("green")
    rect(400,400,800,800)
    fill('black')
    text("whoa you won great job",400,400)
    text ("R to restart",400,500)
    
turnPlayer = false
 turnevilguy = false
  }
}
function resetgame(){
if(restartGame = true && keyIsDown(82)){
turnPlayer = true
turnevilguy = false
health = 100
evilguyHealth = 100
}
}

// these are like the people you kill or smt idk this is just a place holder
function evil_guy(){
image(evilguyImg[framchangeevilguy],500,400)
// health
fill(200)
rect(600,250,130,25)
fill(200,0,0)
rect(600,250,evilguyHealth,20)

// evilguy attack
if(turnevilguy == true){
  framchangeevilguy += 1
}
if(framchangeevilguy == 11){
  framchangeevilguy = 0
  turnevilguy = false
  hitormissevil = random(10)
  turnPlayer = true
}
if(hitormissevil >= 6){
health -= 10
fill("red")
rect(400,400,800,800)
hitormissevil = 0
}
}
// this will be our first attack way
function attack1button1(){
image(playerAttack1button,100,675,150,200)
if(mouseX >= 25 && mouseX <= 175 && mouseY >= 580 && mouseY <= 765 && mouseIsPressed == true && turnPlayer == true){
  framechange += 1
}
if(framechange == 16){
  framechange = 3
  hitormissplayer = random(10)
turnPlayer = false
turnevilguy = true
}
// hit or miss
if(hitormissplayer >= 6){
evilguyHealth -= 10
fill("red")
rect(400,400,800,800)
hitormissplayer = 0
}
else if(hitormissplayer == 1 || hitormissplayer == 2 ||hitormissplayer == 3 || hitormissplayer == 4 || hitormissplayer == 5){

}
}
// second attack
function attack2button2(){
image(playerAttack2button,300,675,150,200)
 if(mouseX >= 225 && mouseX <= 380 && mouseY >= 580 && mouseY <= 765 && mouseIsPressed == true && turnPlayer == true){
  playerImg[framechange] = playerImg[21]
 }
 if(framechange == 32){
   turnPlayer = false
   framechange = 3
  turnevilguy = true
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
  // attack2button2()
  player(200,200)
  evil_guy()
  winOrlose()
  resetgame()
}
// key code thing
function keyPressed() {
  console.log(keyCode)
}
