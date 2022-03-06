let mic;
var clouds = [];


function setup() {
  createCanvas(400, 400);
  background(135,206,250)
  
  mic = new p5.AudioIn()
  mic.start();  

  

}

    

function draw() {
  console.log("mic level " + mic.getLevel())
  if (mic.getLevel() > 0.03){
      drawOpenMouth();
  }
  else if(mic.getLevel() < 0.03){
    drawBody()
    drawArms();
    drawHead();
    drawEyes();
    drawMouth();
    drawHair();
    drawCrown();
    cloud();
  }
  
  	for (i = 0; i < clouds.length; i++) {
		var currentObj = clouds[i];
		cloud(currentObj.xpos, currentObj.ypos, currentObj.size);
		currentObj.xpos += 0;
		currentObj.ypos += 0;
		if (clouds[i].xpos > width+20) {
			clouds.splice(i, 1);
		}
	}

}


function cloud(x, y, size) {
	fill(255, 255, 255);
	noStroke();
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
	arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}

function mousePressed() {
	var newCloud = {
		xpos: mouseX,
		ypos: mouseY,
		size: random(0.8, 1.3)
	};
	clouds.push(newCloud);
}

function drawBody(){
//body and arms
  let bl = color(21,105,199);
  let w = color('white');
  fill(bl);
  ellipse(200,350,190,250)
  fill(w)
  rect(110,375,180,10)
}

function drawArms(){
  let s = color(255,220,177);
  let bl = color(21,105,199);
  fill(s);
  circle(82,390,45);
  circle(318,390,45);
  fill(bl);
  beginShape()
  stroke(21,27,141);
  vertex(width * 0.29, height * 0.7);
  vertex(width * 0.15, height * 0.95);
  vertex(width * 0.25, height * 0.95);
  vertex(width * 0.35, height * 0.75);
  endShape()
  beginShape()
  stroke(21,27,141);
  vertex(width * 0.71, height * 0.7);
  vertex(width * 0.85, height * 0.95);
  vertex(width * 0.75, height * 0.95);
  vertex(width * 0.65, height * 0.75);
  endShape()
}
 
function drawHead(){
//head
  let s = color(255,220,177);
  fill(s);
  stroke('black')
  circle(200,200,200)
}

function drawEyes(){
//eyes
  let w = color('white');  
  fill(w);
  stroke('black')
  ellipse(150,190,35,50)
  ellipse(250,190,35,50)
  
  let b = color('black');
  fill(b);
  stroke('black')
  circle(155,195,15);
  circle(245,195,15);
}  
  
function drawMouth(){
//mouth
  beginShape();
  noFill();
  stroke('black')
  vertex(140,250);
  vertex(200,275);
  vertex(260,250);
  endShape();
}

function drawHair(){
//hair
  let b = color('black');
  fill(b)
  beginShape()
  stroke('black')
  curveVertex(width * 0.25, height * 0.5);
  curveVertex(width * 0.26, height * 0.37);  
  curveVertex(width * 0.3, height * 0.33);
  curveVertex(width * 0.35, height * 0.25);
  curveVertex(width * 0.48, height * 0.25);
  curveVertex(width * 0.58, height * 0.25);
  curveVertex(width * 0.67, height * 0.32);
  curveVertex(width * 0.76, height * 0.4)
  vertex(width * 0.75, height * 0.5);
  curveVertex(width * 0.69, height * 0.45);
  curveVertex(width * 0.65, height * 0.35);
  curveVertex(width * 0.6, height * 0.33);
  curveVertex(width * 0.55, height * 0.3);
  curveVertex(width * 0.5, height * 0.38);
  curveVertex(width * 0.45, height * 0.38);
  curveVertex(width * 0.4, height * 0.36);
  curveVertex(width * 0.45, height * 0.36);
  curveVertex(width * 0.48, height * 0.3);
  curveVertex(width * 0.5, height * 0.3);
  curveVertex(width * 0.4, height * 0.3);
  curveVertex(width * 0.35, height * 0.37)
  curveVertex(width * 0.3, height * 0.4)
  curveVertex(width * 0.25, height * 0.35)
  endShape()
}

//ears
function drawCrown(){
//crown
  let g = color(255,223,0);
  fill(g);
  beginShape()
  noStroke()
  vertex(width * 0.60, height * 0.2);
  vertex(width * 0.60, height * 0.3);
  vertex(width * 0.70, height * 0.3);
  vertex(width * 0.70, height * 0.2);
  vertex(width * 0.67, height * 0.24);
  vertex(width * 0.65, height * 0.2);
  vertex(width * 0.63, height * 0.24);
  endShape()
}
  
function drawOpenMouth(){
  let tongue = color(255,192,203);
  let mouth = color(129,54,57);
  fill(mouth);
  ellipse(200,250,120,75);
  fill(tongue);
  ellipse(214,262,70,50);
  
}
