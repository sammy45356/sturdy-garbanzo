function preload(){
    mustache=loadImage("https://i.postimg.cc/tg3Qr7TS/mustcahhe.png")
}
noseX=0
noseY=0
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
     video=createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log('POSENET is initionalized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
       noseX=results[0].pose.nose.x-50;
         noseY=results[0].pose.nose.y+4;
    }
}
function draw(){
    image(video, 0, 0, 500, 400);
    image(mustache, noseX, noseY, 100, 30);
}

function take_snapshot(){
    save('mustache.png');
}