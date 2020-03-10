var xoff = 0;
var offset = 0.1
function setup(){
    createCanvas(400, 400);
}

function draw(){
    background("gray");
    // Perlin noise
    var xnoise = width * noise(xoff);
    fill("black");
    text("Perlin Noise (Offset: " + offset + ")", 30, 60);
    ellipse(xnoise, 100, 24, 24);
    xoff += offset;
    // Random
    var xrand = random(width);
    fill("white");
    text("Random", 30, 260);
    ellipse(xrand, 300, 24, 24);
}