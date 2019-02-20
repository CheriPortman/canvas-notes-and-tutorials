const play = document.getElementById('play');  //play button

play.addEventListener('click', function() {
    placeTribbles();
});

function placeTribbles() {
    setInterval(randomPlaceImg, 1000); //stretch: speeds up over time
}

function randomPlaceImg() {
    const tribble = document.createElement('div');
    tribble.id = 'tribble';
    tribble.name = 'tribble';
    tribble.innerHTML = '<img src="./assets/tribble.png" id="theimage" onclick="killTribble()">';
    tribble.style.position = 'absolute';
    document.body.appendChild(tribble);
    
    
    let randomx = Math.floor(Math.random() * Math.floor(700) + 1);
    console.log('randomx', randomx);
    let randomy = Math.floor(Math.random() * Math.floor(405) + 1);
    console.log('randomy', randomy);
    tribble.style.top = randomx + 'px';
    tribble.style.left = randomy + 'px';
    
    // return tribble;
}

function killTribble() {
    tribble.classList.add('hidden');
}