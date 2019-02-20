// const placeTribble = window.setInterval(randomPlaceImg(), 500);
const play = document.getElementById('play');

play.addEventListener('click', function() {
    placeTribbles();
});

function placeTribbles() {
    setInterval(randomPlaceImg, 1000);
}

function randomPlaceImg() {
    var img_holder = document.createElement('div');
    img_holder.id = 'img_holder';
    img_holder.name = 'img_holder';
    img_holder.innerHTML = '<img src="./assets/tribble.png" id="theimage">';
    img_holder.style.position = 'absolute';
    document.body.appendChild(img_holder);
    
    let randomx = Math.floor(Math.random() * Math.floor(700) + 1);
    console.log('randomx', randomx);
    let randomy = Math.floor(Math.random() * Math.floor(405) + 1);
    console.log('randomy', randomy);
    img_holder.style.top = randomx + 'px';
    img_holder.style.left = randomy + 'px';
}

// placeTribbles();