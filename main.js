var Letter = 'Coding';

LeftWristX = 0;
RightWristX = 0;
Difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
//---
    canvas = createCanvas(550,500);
    canvas.position(560,160);
//---
poseNet = ml5.poseNet(video, ModelLoaded);
poseNet.on("pose",gotPoses);
}
function ModelLoaded() {
    console.log("PoseNet is Initialialized.");
}
function changeLetter() {
    Letter = document.getElementById("word").value;
}


function gotPoses(results) {
    if(results.length > 0) 
    {
    console.log(results);
    LeftWristX = results[0].pose.leftWrist.x ;
    RightWristX = results[0].pose.rightWrist.x ;
    Difference = floor(LeftWristX - RightWristX);
    }
    }

    function draw() {
        background('rgb(71, 245, 187)');
        textSize(Difference);
        fill("#32b37d");
        text(Letter, 50, 400);

    }