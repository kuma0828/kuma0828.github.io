var img = null,
  cubes = [];
let types = {
  C: [10],
  P: [20],
  A: [50],
};
let num = ["-1", "1"];

let button_change = [];
let a = 10,
  b = 0,
  k = ["#D79922", "#FFFFFF", "#2F0000"],
  j;
let myShader;
let graphics;
let canvas;
let n = 0,
  m = 0,
  l = 0;

function windowResized() {
  // console.log("resized");
  resize(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  graphics = createGraphics(width, height, WEBGL);
  graphics.pixelDensity(1);
  graphics.noStroke();
  graphics.strokeWeight(5);
  graphics.noFill();
  pixelDensity(1);
  background(0);

  //button change
  button_change[0] = createButton("C JOURNEY");
  button_change[1] = createButton("P JOURNEY");
  button_change[2] = createButton("A JOURNEY");
  for (let i = 0; i < 3; i++) {
    // button_change[i].position(220 + 400 * i, 350);
    button_change[i].style("width", "230px");
    button_change[i].style("position", "absolute");
    button_change[i].style("height", "50px");
    button_change[i].style("border-radius", "8px");
    button_change[i].style("font-size", "24px");
    button_change[i].addClass("button1");
    button_change[0].style("left", "220px");
    button_change[0].style("top", "350px");
    button_change[1].style("left", "620px");
    button_change[1].style("top", "350px");
    button_change[2].style("left", "1020px");
    button_change[2].style("top", "350px");
  }
  // button_change[0].style("left", "220px");
  // button_change[0].style("top", "350px");
  // button_change[1].style("left", "620px");
  // button_change[1].style("top", "350px");
  // button_change[2].style("left", "1020px");
  // button_change[2].style("top", "350px");
  button_change[0].mousePressed(alert0);
  button_change[1].mousePressed(alert1);
  button_change[2].mousePressed(alert2);
}

function draw() {
  background(0);

  // to get the trails
  if (img !== null) set(0, 0, img);
  fill(0, 12);
  rect(0, 0, windowWidth, windowHeight);
  fill(255);
  cubes.forEach(updateCube); // updateCube below
  // if(cubes[i].alpha<=0){
  //   cubes[i].append()
  // }
  img = get();
}

function updateCube(cube) {
  push();
  translate(cube.x, cube.y);

  fill(255, cube.alpha);
  cube.alpha = cube.alpha - cube.dispear;

  rotate(cube.arg);
  let l = -cube.size / 2;
  rect(l, l, cube.size);
  pop();
  cube.x = (cube.x + cube.dx) % windowWidth;
  cube.y = (cube.y + cube.dy) % windowHeight;
  cube.arg += cube.darg;
  if (cube.alpha < 0) cubes.slice(cube);
}

function mouseClicked() {
  noStroke();
  let c = random(b, a);
  for (let i = 0; i < c; i++) {
    let cubeSize = random(10);
    let cube = {
      x: mouseX,
      y: mouseY,
      size: cubeSize,
      col: "#D79922",
      alpha: random(255),
      dispear: random(5),
      n: num[random(2)],
      dx: random(cubeSize / 2),
      dy: random(cubeSize / 2),
      arg: random(TAU),
      darg: random(0.5) - 0.25,
    };
    cubes.push(cube);
  }
}

function alert0() {
  a = types.C[0];
  b = 0;
  j = k[0];
  button_change[0].style("background-color", "white");
  button_change[0].style("color", "black");
  button_change[1].style("color", "white");
  button_change[1].style("background-color", "black");
  button_change[2].style("color", "white");
  button_change[2].style("background-color", "black");
}
function alert1() {
  a = types.P[0];
  b = 10;
  j = k[1];
  button_change[1].style("background-color", "white");
  button_change[1].style("color", "black");
  button_change[0].style("color", "white");
  button_change[0].style("background-color", "black");
  button_change[2].style("color", "white");
  button_change[2].style("background-color", "black");
}
function alert2() {
  a = types.A[0];
  b = 20;
  j = k[2];
  button_change[2].style("background-color", "white");
  button_change[2].style("color", "black");
  button_change[0].style("color", "white");
  button_change[0].style("background-color", "black");
  button_change[1].style("color", "white");
  button_change[1].style("background-color", "black");
}
