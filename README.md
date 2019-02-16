# Canvas game tutorial from w3Schools

## notes for myself:

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

above is my canvas

createLinearGradient(x,y,x1,y2)
createRadialGradient(x,y,r,x1,y1,r1)

once you have a gradient object, add two or more color stops
addColorStop() method. Positions are between 0 to 1
to use the gradient, set fillStyle or strokeStyle property to the gradient, then draw the shape