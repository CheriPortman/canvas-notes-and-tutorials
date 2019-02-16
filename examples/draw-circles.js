function drawCircles() {
    //DRAW CIRCLES
    const secondCanvas = document.getElementById('second');
    const ctxCircle = secondCanvas.getContext('2d');
    ctxCircle.beginPath();  //begins the path
                                //to make circle set start angle to 0 and end angle to 2*Math.PI
    ctxCircle.arc(50, 50, 40, 0, 2 * Math.PI);  //arc(x, y, radius, startangle, endangle)
    ctxCircle.stroke();   //.fill('color') to fill in the circle. instead of stroke

    const ctxCircle2 = secondCanvas.getContext('2d');
    ctxCircle2.beginPath();
    ctxCircle2.arc(150, 50, 40, 0, 2 * Math.PI);
    ctxCircle2.fillStyle = 'pink';
    ctxCircle2.fill();
}

export default drawCircles;