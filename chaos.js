let ax, ay;
let bx, by;
let cx, cy;
let x, y;
let i = 0;

function setup() {
  let canvas = createCanvas(windowWidth * 0.6, windowHeight * 0.9);
  canvas.parent("chaos-wrapper");
  ax = width / 2;
  ay = 0;
  bx = 0;
  by = height;
  cx = width;
  cy = height;
  x = random(width);
  y = random(height);
  background(0);
  strokeWeight(1);
  point(ax, ay);
  point(bx, by);
  point(cx, cy);
}

function draw() {
  for (let j = 0; j <= speed; j++) {
    if (i >= iterations) {
      return;
    }
    stroke(floor(random(255)), floor(random(255)), floor(random(255)));
    point(x, y);

    let r = floor(random(3));
    if (r == 0) {
      x = lerp(x, ax, 0.5);
      y = lerp(y, ay, 0.5);
    } else if (r == 1) {
      x = lerp(x, bx, 0.5);
      y = lerp(y, by, 0.5);
    } else if (r == 2) {
      x = lerp(x, cx, 0.5);
      y = lerp(y, cy, 0.5);
    }
    i++;
  }
}
