let classifier;
let img;
let label = "waiting...";

function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("house_finch.jpeg");
}

function gotResults(results) {
  console.log(results);
  label = results[0].label;
}

function setup() {
  createCanvas(640, 480);
  classifier.classify(img, gotResults);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
  
  rectMode(CENTER);
  fill(0);
  rect(width/2, height-50, width, 50);
  textSize(32);
  fill(255);
  textAlign(CENTER,CENTER);
  noStroke();
  text(label, width/2 , height-50);
}