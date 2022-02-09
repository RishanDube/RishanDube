rightWristX=0;
leftWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    console.log('inside gotPoses');
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftwristX = "+ leftWristX + "rightWristX = "+ rightWristX + "difference =" + difference);
    }
}

function draw(){
    background=('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
   fill('#F90093');
   stroke('#F90093');
   text('Rishan', 10, 30);
textSize(difference);
}