function preload()
{


}

function setup()
{
 canvas = createCanvas(640,480);
 canvas.position(500,250);
 video = createCapture(VIDEO);
 video.hide();

}

function draw()
{

fill(0,128,0);
stroke(0,128,0);
rect(0,0,640,480);
image(video,70,35,500,400);

}

function take_snapshot()
{
save('namish.png');
}
