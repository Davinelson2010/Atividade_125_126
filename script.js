noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;
function setup(){
video = createCapture(VIDEO)
video.size(550,500)
canvas = createCanvas(550, 550)
canvas.position(560, 150)
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose",gotPoses)
}
function modelLoaded(){
 console.log("poseNet foi inicializado")
}
function gotPoses(results) {
if(results.lenght >0){
    noseX = results[0].pose.nose.x;
    noseY =  results[0].pose.nose.y;

    leftWristX = results[0].poseleftWrist.x
    rightWristX = results[0].poserightWrist.x
    difference = floor(leftWristX - rightWristX)
}
}
function draw() {
background("969A97")
document.getElementById("square_side").innerHTML = "Largura e Altura serão =" + difference + "px"
fill("#F90093")
stroke("#F90093")
square(noseX, noseY, difference)
}
