leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO)
    video.size(550,500)
    video.position(350,200)
    canvas = createCanvas(400,400)
    canvas.position(1000,280)
    poseNet = ml5.poseNet(video,modalLoaded)
    poseNet.on('pose', gotPoses)
}
function modalLoaded(){
    console.log('modalLoaded')
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        document.getElementById("side_square").innerHTML = "Size of square is: " + floor(difference) + "px";
    }
}
function draw(){
    background('gray');
    textSize(difference);
    text("Yaksh",50,60)
}