let whiteGamePiece;
let yellowGamePiece;

function startGame() {
    myGameArea.start();
    /* eslint-disable-next-line */
    whiteGamePiece = new component(30, 30, 'white', 10, 120); //can use hex, rgb, or rgba
    /* eslint-disable-next-line */        //height, width, color, x, y
    yellowGamePiece = new component(30, 30, 'yellow', 10, 10); //can use hex, rgb, or rgba
}

const myGameArea = {
    canvas: document.createElement('canvas'),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    };
}

function updateGameArea() {
    myGameArea.clear();
    // whiteGamePiece.x -= 1;  //moves it a pixel each refresh, along the x axis
    // if(whiteGamePiece.x === 0) {
        // whiteGamePiece.x = 480;
    // }
    whiteGamePiece.update();
    yellowGamePiece.x += 2;
    if(yellowGamePiece.x === 480) {
        yellowGamePiece.x = 0;
    }
    yellowGamePiece.update();
}