noseY = 0;
noseX = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload(){
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX + "noseY = "  + noseY);

      rightWristX = results[0].pose.rightWrist.x;
      leftWristX = results[0].pose.leftWrist.x;
      difference = leftWristX - rightWristX;
      difference = floor(leftWristX - rightWristX);
      
      console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " +  difference);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    background('#357a07');
    textSize(32);
    text('Deepan', noseX, noseY, difference);
    fill(0, 102, 153);
    
}