//get the element node
var canvas = document.getElementById('myCanvas');
//need a drawing object for the canvas
//getContext() is a built-in (has properties and methods for drawing)
var ctx = canvas.getContext('2d');

//now you can draw
ctx.fillStyle = '#FF0000';  //fillStyle property can be a color, gradient, or pattern
ctx.fillRect(0, 0, 150, 75);//fillRect(x, y, width, height)