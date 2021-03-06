function canvas1() {
    //get the element node
    const firstCanvas = document.getElementById('first');
    //need a drawing object for the canvas
    //getContext() is a built-in (has properties and methods for drawing)
    const ctxRect = firstCanvas.getContext('2d');
    
    //DRAW A RECTANGLE AND FILL WITH COLOR
    //now you can fill in the rectangle with color, gradient, or pattern
    ctxRect.fillStyle = '#FF0000';  
    ctxRect.fillRect(0, 0, 150, 75);//fillRect(x, y, width, height)
    
    //DRAW LINES
    ctxRect.moveTo(0, 0);  //starting point
    ctxRect.lineTo(200, 100); //(x, y)
    ctxRect.stroke();  //one of the "ink methods" to actually draw the line

    //add some text (see canvas 5 and 6)
    ctxRect.font = '30px fantasy';
    ctxRect.fillStyle = 'purple';
    ctxRect.fillText('canvas1.js', 10, 95);
}

export default canvas1;