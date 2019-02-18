let gamePiece;

function startGame() {
    gamePiece = new piece(30, 30, 'white', 10, 120);

    playingField.start();
}

//create the gameArea
const playingField = {
    canvas: document.createElement('canvas'),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); //index zero = first childNode
        this.interval = setInterval(updatePlayingField, 20); //refreshes to get animation
    }
};

//constructor to build game square
function piece(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    
    this.update = function() {
        let ctx = playingField.context; //where the piece lives
        ctx.fillStyle = color;          //add color
        ctx.fillRect(this.x, this.y, this.width, this.height);  //creates the shape
    };

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    };
}

function updatePlayingField() {
    // playingField.clear();
    gamePiece.speedX = 0;
    gamePiece.speedY = 0;

    gamePiece.newPos();
    gamePiece.update();
}

