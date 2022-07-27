function setup(){
    canvas= createCanvas(450,450)
    canvas.position(800,180)
    video= createCapture(VIDEO)
    video.position(100,180)
    poseNet= ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model has loaded.")
}

function gotPoses(results){
 if (results.length > 0) {
     console.log(results)
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX)
 }
}

leftWristX = 0;
rightWristX = 0;
difference = 0;

function draw(){
    background('lightseagreen')
    fill('incolite')
    stroke('incolite')
     textSize(difference)
     text("Micah",50,150)
     document.getElementById("fontSize").innerHTML="Font size is: "+ difference+" pixels."
}