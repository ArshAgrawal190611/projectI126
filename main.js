song="";
song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
function preload()
{
   song=loadSound("music.mp3"); 
}

function setup()
{
   canvas=createCanvas(600,500);
   canvas.center();
   
   video=createCapture(VIDEO);
   video.hide();

   poseNet=ml5.poseNet(video,modelloaded);
   poseNet.on('pose',gotPoses);
}

function draw()
{
   image(video,0,0,600,500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelloaded()
{
   console.log("posenet is initialized"); 

}
function gotPoses(results)
{
     if(results.length > 0){
    console.log(results)  
     leftwristX=results[0].pose.leftWrist.x;
     leftwristY=results[0].pose.leftWrist.y;
     console.log("leftwristX="+leftwristX+"leftwristy="+leftwristY);

     rightwristX=results[0].pose.rightWrist.x;
     rightwristY=results[0].pose.rightWrist.y;
     console.log("rightwristX="+rightwristX+"rightwristy="+rightwristY);
     }
     
}

