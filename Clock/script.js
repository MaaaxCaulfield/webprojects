var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
var R = canvas.width / 2, d, angle, pX, pY, qX, qY
var d, angle ,pX ,pY ,qX ,qY ;

function drawLines(angles, length, color, width){
    var X = (Math.cos(Math.PI / 2 - angles) * R)* length;
    var Y = (-Math.sin(Math.PI / 2 - angles) * R) * length;
    X += R;
    Y += R;
    context.fillStyle = color;
    context.lineWidth = width;
    var line = new Path2D();
    line.moveTo(R,R);
    line.lineTo(X,Y);
    context.stroke(line);
}

function draw(){
for(d = 0; d < 60; ++d) {
    angle = (d / 60) * (2 * Math.PI);
    pX = Math.cos(angle) * R;
    pY = -Math.sin(angle) * R;
    qX = 0.9 * pX;
    qY = 0.9 * pY;
    pX += R;
    pY += R;
    qX += R;
    qY += R;
    var ocr = new Path2D();
    ocr.arc(R,R,R,0,2*Math.PI);
    context.stroke(ocr);
    var line = new Path2D();
    line.moveTo(pX, pY);
    line.lineTo(qX, qY);
    context.stroke(line);
}
}

function time() {
    var date = new Date(),hours,minutes,seconds;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    
    var secondsAngle = (seconds / 60) * (2 * Math.PI);
    var minutesAngle = (minutes / 60) * (2 * Math.PI);
    var hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);
    
    draw();
    
    drawLines(secondsAngle,1, "red", 1);
    drawLines(minutesAngle,0.8, "grey", 2);
    drawLines(hoursAngle,0.6, "black", 5);
}

function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.width);
    
    time();
    
    setTimeout(drawClock, 1000);
}

drawClock();
