shape = "";

function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 400);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
    rect(50, 50, 530, 380);
    circle(60, 60, 50);
    ellipse(570, 60, 55, 55);
    circle(60, 420, 50);
    ellipse(570, 420, 55, 55);
}

function take_snapshot(){
    save("Pic.png");
}
