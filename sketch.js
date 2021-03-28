
// gui params
var margin = 5;
var gui;

function setup() {

  createCanvas(windowWidth, windowHeight);

  // Create the GUI
  sliderRange(0, 10, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('margin',);

  // Only call draw when then gui is changed
  noLoop();

}


function draw() {

  // this is a piece of cake
  background(0);
  angleMode(DEGREES);

  var points = [
    [450,450], [450,500],
    [500,500], [500,450], [450,450]
  ];
  var offset = new Offset();
  var margined = offset.data(points).padding(margin);
  console.log(margined);
  strokeWeight(1);
  stroke(255);
  noFill();
  beginShape();
  for( var i = 0; i < points.length; i++) {
    vertex(points[i][0], points[i][1]);
  }
  endShape();
  stroke(255, 0, 0);
  beginShape();
  for( var i = 0; i < margined.length; i++) {
    for( var j = 0; j < margined[i].length; j++) {
      vertex(margined[i][j][0], margined[i][j][1]);
    }
  }
  endShape();

}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
