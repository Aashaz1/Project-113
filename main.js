function preload(){
}

function setup(){
    canvas = createCanvas(650, 500);
    canvas.position(650, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 650, 500);
    fill(234, 5, 9)
    circle(30, 30, 50);
    circle(620, 30, 50);
    circle(30, 470, 50);
    circle(620, 470, 50);
    fill(10, 249, 18);
    rect(55, 10, 540, 40);
    rect(55, 450, 540, 40);
    rect(10, 55, 40, 390);
    rect(600, 55, 40, 390);
}

function takeSnapshot(){
    save("preject113.png");
}