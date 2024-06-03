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
function gotPoses() {
    
}