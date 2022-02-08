var xStart;
var yStart;
function setup() {
  createCanvas(500, 500);
  xStart = width/2;
  yStart = height/2;
}

function draw() {
  
  background("gray");
  hairUnderLayer();
  strokeWeight(1);
  drawNeck();
  drawFace();
  stroke(0);
  drawEye(xStart - 75, xStart - 25, yStart - 70,"right");
  drawEye(xStart + 72, xStart + 22, yStart - 70, "left");
  stroke(0);
  drawEyebrows(xStart - 23, yStart - 90);
  drawNose(xStart-15, yStart-75);
  drawMouth(xStart-1, yStart+11);
  drawHair();
  fill(0)
  noStroke();
  // ellipse(xStart, yStart, 10);
  noLoop();
}

function drawEye(X1, X2, Y, direction) {
  stroke(0);
  if(direction === "right") {
    fill("white");
    curve(X1 + 30, Y + 80, X1, Y, X2, Y, X1 + 100, Y + 120);
    curve(X1 - 50, Y - 100, X1, Y, X2, Y, X1 + 60, Y);
    
    noFill();
    curve(X1, Y + 80, X1, Y - 5, X2 - 5, Y-14, X1 + 100, Y + 40);
    
    fill("#421d05");
    ellipse(X1 + 25, Y - 3, 18);
    fill(0);
    ellipse(X1 + 25, Y - 3, 7);
    fill("white");
    noStroke();
    ellipse(X1 + 22, Y - 5, 4);
  } else if (direction === "left") {
    fill("white");
    curve(X1 - 30, Y + 80, X1, Y, X2, Y, X1 - 100, Y + 120);
    curve(X1 + 50, Y - 100, X1, Y, X2, Y, X1 - 60, Y);
    
    noFill();
    curve(X1, Y + 80, X1, Y - 5, X2 + 5, Y - 14, X1 - 100, Y + 40);
    
    fill("#421d05");
    ellipse(X1 - 25, Y - 3, 18);
    fill(0);
    ellipse(X1 - 25, Y - 3, 7);
    fill("white");
    noStroke();
    ellipse(X1 - 28, Y - 5, 4);
  }
}

function drawEyebrows(X, Y) {
  noFill();
  strokeWeight(6);
  curve(X-50,Y+20, X, Y, X-60, Y+10, X-50,Y+150)
  curve(X+78,Y+20, X+46, Y, X+106, Y+10, X+78,Y+150)
}

function drawNose(X, Y) {
  strokeWeight(1);
  noFill();
  curve(X,Y+40,X,Y,X,Y+44,X-50,Y+50);
  // curve(X+30,Y+40,X+30,Y,X+30,Y+40,X+80,Y+50);
  
  curve(X+30,Y+10,X-4,Y+48,X-2,Y+58,X+30,Y+60);
  curve(X,Y+10,X+34,Y+48,X+32,Y+58,X,Y+60);
  
  fill(0);
  curve(X+30, yStart, X, Y+56, X+8, Y+61, X+2, yStart);
  curve(X, yStart, X+30, Y+56, X+22, Y+61, X+20, yStart);
  noFill();
  
  curve(X+15,Y+50,X+10, Y+62, X+20, Y+62, X+15,Y+50);
}

function drawMouth(X, Y) {
  curve(X-8, Y-30, X-8, Y-5, X-30, Y+5, X-36, Y-10);
  curve(X+10, Y-30, X+10, Y-5, X+33, Y+5, X+38, Y-10);
  curve(X-8, Y-20, X-8, Y-5, X+10, Y-5, X+10, Y-20);
  
  curve(X-8, Y-30, X-8, Y, X-40, Y+5, X-36, Y-10);
  curve(X+10, Y-30, X+10, Y, X+42, Y+5, X+38, Y-10);
  curve(X-8, Y-20, X-8, Y, X+10, Y, X+10, Y-20);
  
  curve(X, Y-10, X-25, Y+12, X+26, Y+12, X, Y-10);
}

function drawFace() {
  stroke(0)
  fill("#FFCD94");
  ellipse(xStart, yStart-60, 198, 246);
}

function drawHair() {
  fill(0);
  strokeWeight(3);
  curve(xStart+100,-150, xStart+10, yStart-184, xStart+90, yStart-115,xStart+200, 150);
  curve(xStart-200,-150, xStart+10, yStart-170, xStart-100, yStart-115,xStart+200, 150);
  curve(xStart-200, height-200, xStart+8, yStart-184, xStart+110, yStart-110, xStart+80, height-50)
  curve(xStart+40,height-100,xStart+40, yStart-184, xStart-120, yStart-112,xStart-100,height+100);
  curve(xStart,-100,xStart-100, yStart-112, xStart-115, yStart,xStart+100,height);
  
  noFill();
  strokeWeight(30);
  curve(xStart+130,yStart,xStart, yStart-165, xStart-120, yStart-50,xStart-115,height);
  
  strokeWeight(18);
  curve(xStart+258,height,xStart-50, yStart-138, xStart-120, yStart-10,xStart,height);
  
  curve(xStart-30,yStart-200,xStart-105, yStart-70, xStart-85, yStart+20, xStart-50,yStart+15);
  
  curve(xStart+30,yStart-200,xStart+105, yStart-70, xStart+85, yStart+20, xStart+50,yStart+15);
  
  curve(xStart-300,yStart-50,xStart+65, yStart-135, xStart+90, yStart+20, xStart+50,yStart+15);
  
  curve(xStart-300,yStart-50,xStart+75, yStart-135, xStart+90, yStart+50, xStart+50,yStart+15);
}

function hairUnderLayer() {
  strokeWeight(30);
  noFill();
  curve(xStart-100,yStart-300,xStart-108, yStart-5, xStart-20, yStart+80, 0,0);
  
  curve(xStart,yStart-300,xStart+100, yStart-20, xStart+10, yStart+80, 0,0);
  
  noStroke()
  fill(0)
  triangle(xStart, yStart, xStart-100, yStart+10, xStart-70, yStart+60);
  triangle(xStart, yStart, xStart+100, yStart+10, xStart+70, yStart+60);
  triangle(xStart-70, yStart+100, xStart-80, yStart+40, xStart-10, yStart+50);
  triangle(xStart+70, yStart+100, xStart+80, yStart+40, xStart+10, yStart+50);
  
  
}

function drawNeck() {
  noStroke();
  fill("#7a091d");
  ellipse(xStart, yStart+140, 350, 150);
  fill("#FFCD94");
  rectMode(CENTER);
  rect(xStart, yStart, 120, 200);
  fill("#FFCD94");
  ellipse(xStart, yStart+110, 220, 90);
  fill("#7a091d");
  arc(xStart, yStart+115, 225, 200, 6, 60, PIE);
}