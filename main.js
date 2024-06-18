leftWristX = 0;
rightWristX= 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(520, 470);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet( video, modelLoaded);
    poseNet.on("pose", gotPoses);
    
}
function modelLoaded() {
    console.log("Model Loaded!");

}
function gotPoses(results) {
    
        if(results.length>0) {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            console.log("leftWristX = " + leftWristX + "   rightWristX = " + rightWristX + "  difference = " + difference);
        }
    
    
}
function draw() {
    background("white");
    textSize("25px");
    fill("yellow");
    text('Ikchha', 20, 20);
}
