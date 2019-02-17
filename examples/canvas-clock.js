function canvasClock() {
    const canvas = document.getElementById('clock');
    const ctx = canvas.getContext('2d');
    
    let radius = canvas.height / 2;//calculate the clock radius, using height of canvas 
    
    ctx.translate(radius, radius);//remap the (0,0) position of the drawing obj to center of canvas
    
    radius = radius * 0.9; //reduce clock radius so it's well inside
    setInterval(drawClock, 1000);
    
    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    
        function drawFace(ctx, radius) {
            let grad;
            
            //draw the yellow circle
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'yellow';
            ctx.fill();
    
            //create radial gradient (95 and 105% of original clock radius)
            grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
            
            //three color stops, correspond to inner, middle, and outer edge of the ard
            //a 3d-ish effect
            grad.addColorStop(0, 'red');
            grad.addColorStop(0.5, 'white');
            grad.addColorStop(1, 'red');
            ctx.strokeStyle = grad;  //define gradient of the strokeStyle
            ctx.lineWidth = radius * 0.1; //define linewidth of drawing object (10% of radius)
            ctx.stroke();
    
            //draw the clock center
            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill();
        }
    
        function drawNumbers(ctx, radius) {
            let ang;
            let num;
            ctx.font = radius * 0.15 + 'px cursive';  //font size set to 15% of radius
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            for(num = 1; num < 13; num++) {   //calculate print position for nums, 85% of radius
                ang = num * Math.PI / 6;   //rotated PI/6 for each number
                ctx.rotate(ang);
                ctx.translate(0, -radius * 0.85);
                ctx.rotate(-ang);
                ctx.fillText(num.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, radius * 0.85);
                ctx.rotate(-ang);
            }
        }
    
        function drawTime() {
            const now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            let second = now.getSeconds();
    
            //HOUR: calculate angle of hour hand, draw length 50% radius, width 7% radius
            hour = hour % 12;
            hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) +
                (second * Math.PI / (360 * 60));
            drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    
            //MINUTE
            minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
            drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    
            //SECOND
            second = (second * Math.PI / 30);
            drawHand(ctx, second, radius * 0.9, radius * 0.02);
        }
    
        function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = 'round';
            ctx.moveTo(0, 0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }
    }
    }

export default canvasClock;