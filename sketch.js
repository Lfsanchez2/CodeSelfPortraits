// Variable that represents the center X-Value of the canvas.
var xStart;
// Variable that represents the center Y-value of the canvas.
var yStart;
function setup() {
  createCanvas(550, 550);
  xStart = width/2;
  yStart = height/2;
}

function draw() {
  background("#324078");
  // Draws hair behind the body.
  drawUnderLayer1();
  // Draws the neck/shirt.
  drawBody();
  // Draws the LEFT side of the hair that falls on top of the body.
  drawUnderLayer2(1);
  // Draws the RIGHT side of the hair that falls on top of the body.
  drawUnderLayer2(-1);
  strokeWeight(1);
  // Draws the shape and color of the face.
  drawFace();
  stroke(0);
  // Draws the LEFT eye.
  drawEye(xStart - 70, xStart - 23, yStart - 68, 1);
  // Draws the RIGHT eye.
  drawEye(xStart + 67, xStart + 20, yStart - 68, -1);
  // Draws both of the eyebrows.
  drawEyebrows(xStart - 23, yStart - 88);
  // Draws the nose.
  drawNose(xStart-15, yStart-75);
  // Draws the mouth.
  drawMouth(xStart-1, yStart+11);
  // Draws the hair that contours the head.
  drawHair();
  noLoop();
}

function drawEye(X1, X2, Y, side) {
  /* The X1/X2/Y variables determine the position of the eyes so that they are always
   centered towards the middle of the canvas. The side variable determines which eye
   to draw. The left eye is a mirror of the right and vice versa.*/
  stroke(0);
  fill("white");
  // Draw shape of eye / color of sclera. 
  curve(X1 + (30 * side), Y + 80, 
    X1, Y, X2, Y, 
    X1 + (100 * side), Y + 120);
  curve(X1 - (50 * side), Y - 100, 
    X1, Y, X2, Y, 
    X1 + (60 * side), Y);
  // Draw upper eyelid.
  noFill();
  curve(X1, Y + 80, 
    X1, Y - 5, X2 - (5 * side), Y-14, 
    X1 + (100 * side), Y + 40);
  // Draw eye color / iris.  
  fill("#421d05");
  ellipse(X1 + (25 * side), Y - 3, 18);
  fill(0);
  ellipse(X1 + (25 * side), Y - 3, 7);
  fill("white");
  noStroke();
  ellipse(X1 + (22 * side), Y - 5, 4);
}

function drawEyebrows(X, Y) {
  /* The X/Y variables determine the position of the mouth so it is always
   centered near the middle of the canvas. */
  stroke(0);
  noFill();
  strokeWeight(6);
  // The left eyebrow.
  curve(X-50,Y+20, X, Y, X-55, Y+8, X-100,Y+150);
  // The right eyebrow.
  curve(X+78,Y+20, X+46, Y, X+101, Y+8, X+100,Y+150);
}

function drawNose(X, Y) {
  /* The X/Y variables determine the position of the mouth so it is always
   centered near the middle of the canvas. */
  strokeWeight(1);
  // Nose bridge
  curve(X,Y+40,X,Y,X,Y+44,X-50,Y+50);
  // Edge of nostrils
  curve(X+30,Y+10,X-4,Y+48,X-2,Y+58,X+30,Y+60);
  curve(X,Y+10,X+34,Y+48,X+32,Y+58,X,Y+60);
  // Nostrils
  fill(0);
  curve(X+30, yStart, X, Y+56, X+8, Y+61, X+2, yStart);
  curve(X, yStart, X+30, Y+56, X+22, Y+61, X+20, yStart);
  noFill();
  // End of nose
  curve(X+15,Y+50,X+10, Y+62, X+20, Y+62, X+15,Y+50);
}

function drawMouth(X, Y) {
  /* The X/Y variables determine the position of the mouth so it is always
   centered near the middle of the canvas. */
  // Upper lip
  curve(X-8, Y-30, X-8, Y-5, X-30, Y+5, X-36, Y-10);
  curve(X+10, Y-30, X+10, Y-5, X+33, Y+5, X+38, Y-10);
  curve(X-8, Y-20, X-8, Y-5, X+10, Y-5, X+10, Y-20);
  // Middle
  curve(X-8, Y-30, X-8, Y, X-34, Y+5, X-36, Y-10);
  curve(X+10, Y-30, X+10, Y, X+36, Y+5, X+38, Y-10);
  curve(X-8, Y-20, X-8, Y, X+10, Y, X+10, Y-20);
  // Lower lip
  curve(X, Y-10, X-25, Y+12, X+26, Y+12, X, Y-10);
}

function drawFace() {
  // The base shape and color of the face.
  fill("#FFCD94");
  ellipse(xStart, yStart-60, 179, 247);
}

function drawHair() {
  /* The hair is composed of a series of overlapped curves with different weights. There isn't a 
  set pattern to the curves, they are just consistently edited until they fall into place. */ 
  fill(0);
  strokeWeight(20);
  curve(xStart+100,-150, xStart+10, yStart-180, xStart+90, yStart-115,xStart+200, 150);
  curve(xStart+50, yStart, xStart+10, yStart-180, xStart+100, yStart-100, xStart+200, yStart);
  strokeWeight(6);
  curve(xStart-200,-150, xStart+10, yStart-170, xStart-100, yStart-115,xStart+200, 150);
  curve(xStart-200, height-200, xStart+8, yStart-184, xStart+110, yStart-110, xStart+80, height-50)
  curve(xStart+40,height-100,xStart+40, yStart-184, xStart-120, yStart-112,xStart-100,height+100);
  noFill();
  strokeWeight(30);
  curve(xStart+130,yStart,xStart, yStart-165, xStart-115, yStart-50,xStart-115,height);
  curve(xStart-20,yStart,xStart-110, yStart-15, xStart-100, yStart+20,0,0);
  strokeWeight(18);
  curve(xStart+258,height,xStart-50, yStart-138, xStart-120, yStart-10,xStart,height);
  curve(xStart-30,yStart-200,xStart-105, yStart-70, xStart-85, yStart+20, xStart-50,yStart+15);
  curve(xStart-300,yStart-50,xStart+65, yStart-135, xStart+90, yStart+20, xStart+50,yStart+15);
  curve(xStart-300,yStart-50,xStart+75, yStart-135, xStart+90, yStart+50, xStart+50,yStart+15);
}

function drawUnderLayer1() {
  /* Hair that is visible from behind the neck/face. There isn't a set pattern to
   the curves, they are just consistently edited until they fall into place. */
  strokeWeight(30);
  curve(xStart-100,yStart-300,xStart-108, yStart-5, xStart-20, yStart+80, 0,0);
  curve(xStart,yStart-300,xStart+100, yStart-20, xStart+10, yStart+80, 0,0);
  noStroke();
  fill(0);
  triangle(xStart, yStart, xStart-100, yStart+10, xStart-70, yStart+60);
  triangle(xStart, yStart, xStart+100, yStart+10, xStart+70, yStart+60);
  triangle(xStart-70, yStart+100, xStart-80, yStart+40, xStart-10, yStart+50);
  triangle(xStart+70, yStart+100, xStart+80, yStart+40, xStart+10, yStart+50); 
  ellipse(xStart, yStart-60, 200, 246);
}

function drawUnderLayer2(side) {
  /* Hair that is visible in front of the body/neck, but behind the face. There isn't a set pattern to
   the curves, they are just consistently edited until they fall into place. The 'side' variable helps
   to mirror the curves on the opposite side symmetrically. */
  stroke(0);
  strokeWeight(15)
  noFill();
  var angleXPoint = 0;
  if(side === -1) {
    angleXPoint = width;
  }
  curve(angleXPoint, 0, xStart-(70*side), yStart+20, xStart-(80*side), yStart+100, xStart-(80*side),
    yStart+100);
  curve(angleXPoint, 0, xStart-(90*side), yStart+20, xStart-(80*side), yStart+100, xStart-(80*side), 
    yStart+100);
  strokeWeight(20);
  curve(xStart,yStart-100, xStart-(100*side), yStart, xStart-(80*side), yStart+120, 
    xStart-(120*side), yStart+200);
  curve(xStart,yStart-100, xStart-(100*side), yStart, xStart-(80*side), yStart+120, 
    xStart-(120*side), yStart+200);
  curve(xStart,yStart-100, xStart-(70*side), yStart+84, xStart-(75*side), yStart+140, xStart-(75*side),
    yStart+100);
  curve(xStart,yStart-100, xStart-(90*side), yStart+50, xStart-(75*side), yStart+140, xStart-(75*side),
    yStart+100);
  curve(angleXPoint,0,xStart-(75*side), yStart+96, xStart-(110*side), yStart+160,angleXPoint,height-100);
  fill(0);
  ellipse(xStart-(100*side), yStart+112, 25, 80);
  noFill();
  curve(angleXPoint+(width*side), yStart, xStart-(85*side), yStart+60, xStart-(120*side), yStart+160,
    angleXPoint,height-100);
  curve(angleXPoint+(width*side), 0, xStart-(88*side), yStart+30, xStart-(120*side), yStart+175,
    angleXPoint,yStart+100);
  curve(angleXPoint+(width*side), 0, xStart-(91*side), yStart+30, xStart-(126*side), yStart+180,
    angleXPoint,yStart+100);
  curve(angleXPoint+(width*side), 0, xStart-(100*side), yStart+90, xStart-(132*side), yStart+180,
    angleXPoint,yStart+180);
  curve(xStart, yStart+120, xStart-(120*side), yStart+90, xStart-(132*side), yStart+180,
    xStart,yStart+180);
}

function drawBody() {
  // The shape and color of the red shirt
  fill("#7a091d");
  ellipse(xStart, yStart+140, 350, 150);
  // The shape and color of the neck
  fill("#FFCD94");
  rectMode(CENTER);
  rect(xStart, yStart, 120, 200);
  // The shape and color of the collarbone
  fill("#FFCD94");
  ellipse(xStart, yStart+110, 220, 90);
  // The v-neck shape of the shirt
  fill("#7a091d");
  arc(xStart, yStart+115, 225, 200, 6, 60, PIE);
}