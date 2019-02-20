let whiteGamePiece;
let yellowGamePiece;

function startGame() {
    /* eslint-disable-next-line */      //height, width, color, x, y
    whiteGamePiece = new component(30, 30, 'white', 10, 120); //can use hex, rgb, or rgba
    // yellowGamePiece = new component(30, 30, 'yellow', 10, 10); //can use hex, rgb, or rgba
    
    myGameArea.start();
}

//creates the canvas for the game to exist within
const myGameArea = {
    canvas: document.createElement('canvas'),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);  //refreshes to get animation

        window.addEventListener('keydown', function(e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function(e) {
            myGameArea.keys[e.keyCode] = false;
        });
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};
//constructor function to build a game square
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;    //where the piece lives
        ctx.fillStyle = color;            // add color
        ctx.fillRect(this.x, this.y, this.width, this.height); //creates the shape
    };
    this.newPos = function() {          //uses speedX and speedY to change position of component
        this.x += this.speedX;
        this.y += this.speedY;
    };
}

function updateGameArea() {
    myGameArea.clear();
    whiteGamePiece.speedX = 0;
    whiteGamePiece.speedY = 0;

        //allows to use arrow keys to move block
    if(myGameArea.keys && myGameArea.keys[37]) {''
        whiteGamePiece.speedX = -1;
    }
    if(myGameArea.keys && myGameArea.keys[39]) {
        whiteGamePiece.speedX = 1;
    }
    if(myGameArea.keys && myGameArea.keys[38]) {
        whiteGamePiece.speedY = -1;
    }
    if(myGameArea.keys && myGameArea.keys[40]) {
        whiteGamePiece.speedY = 1;
    }
   
    whiteGamePiece.newPos();
    whiteGamePiece.update();
    
    // yellowGamePiece.x += 2;
    // if(yellowGamePiece.x === 480) {
    //     yellowGamePiece.x = 0;
    // }
    // yellowGamePiece.newPos();
    // yellowGamePiece.update();
}

function moveup() {
    whiteGamePiece.speedY -= 1;
}

function movedown() {
    whiteGamePiece.speedY += 1;
}

function moveleft() {
    whiteGamePiece.speedX -= 1;
}

function moveright() {
    whiteGamePiece.speedX += 1;
}

function stopMove() {
    whiteGamePiece.speedX = 0;
    whiteGamePiece.speedY = 0;
}