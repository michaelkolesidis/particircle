let circle = 200;
let rot;
let col;
let freq = 0.000005;
let cont = 0;
let r;

function setup() {
  createCanvas(
    windowWidth - (windowWidth * 0.4) / 100,
    windowHeight - (windowHeight * 0.4) / 100
  );
}

function draw() {
  background(0);
  translate(
    (windowWidth - (windowWidth * 0.4) / 100) / 2,
    (windowHeight - (windowHeight * 0.4) / 100) / 2
  );
  rotate(radians(rot));

  ellipseMode(RADIUS);
  for (let i = 0; i < 500; i++) {
    circle = 200 + 50 * sin(millis() * freq * i);
    col = map(circle, 150, 250, 255, 60);
    r = map(circle, 150, 250, 5, 2);
    fill(col, 0, 74);
    noStroke();
    ellipse(circle * cos(i), circle * sin(i), r, r);
    rot = rot + 0.00005;
  }
}

function windowResized() {
  resizeCanvas(
    windowWidth - (windowWidth * 0.4) / 100,
    windowHeight - (windowHeight * 0.4) / 100
  );
}
