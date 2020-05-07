let video;
let poseNet;
let pose; 


function setup() {
  createCanvas(640,480);
  video = createCapture(VIDEO);
  video.hide()
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses); 
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function modelLoaded(){
  console.log('poseNet ready');
}
  
function draw(){
  image (video, 0, 0)
  
  if (pose){
    
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    
    fill(213, 0, 0);
    let nose = pose['nose'];
    ellipse(nose.x, nose.y, 20, 20);

    fill(200, 100, 12)
    let leftWrist = pose['leftWrist'];
    ellipse(leftWrist.x, leftWrist.y, 30,30);
            
    fill(200, 100, 12)
    let rightWrist = pose['rightWrist'];
    ellipse(rightWrist.x, rightWrist.y, 30,30);
  }
}
