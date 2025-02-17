// python3 -m http.server
// http://localhost:8000

let video;
let bodyPose;
let connections;
let poses = [];

function preload() {
  bodyPose = ml5.bodyPose("MoveNet", {flipped: true});
}

function mousePressed() {
  console.log(poses);
}

function gotPoses(results) {
  poses = results;
}

function setup() {
  frameRate(15);
  createCanvas(640, 480);
  video = createCapture(VIDEO, {flipped: true});
  video.hide();
  bodyPose.detectStart(video, gotPoses);

  // connections = bodyPose.getSkeleton();
  // console.log(connections);
}

function draw() {
  image(video, 0, 0);

  if (poses.length > 0) {
    let pose = poses[0];
    let x = pose.nose.x;
    let y = pose.nose.y;
    fill(255,0,0);
    circle(x, y, 20);

    // let rx = pose.right_wrist.x;
    // let ry = pose.right_wrist.y;

    // let lx = pose.left_wrist.x;
    // let ly = pose.left_wrist.y;

    // fill(0,0,255);
    // circle(rx,ry,16);
    // fill(0,255,0);
    // circle(lx,ly,16);

    // let d = dist(rx,ry,lx,ly);
    // fill(255,0,0);
    // circle(x,y,d);

    // for (let i = 0; i < connections.length; i++) {
    //   let connection = connections[i];
    //   let a = connection[0];
    //   let b = connection[1];
    //   let keyPointA = pose.keypoints[a];
    //   let keyPointB = pose.keypoints[b];
    //   let confA = keyPointA.confidence;
    //   let confB = keyPointB.confidence;

    //   if (confA > 0.1 && confB > 0.1) {
    //     stroke(255,0, 255);
    //     stokeWeight(8);
    //     line(keyPointA.x, keyPointA.y, keyPointB.x, keyPointB.y);
    //   }
    // }

    // for (let i = 0; i < pose.keypoints.length; i++) {
    //   let keypoint = pose.keypoints[i];
    //   fill(255);
    //   noStroke();
    //   if (keypoint.confidence > 0.1) {
    //     circle(keypoint.x, keypoint.y, 8);
    //   }
    // }
  }
}