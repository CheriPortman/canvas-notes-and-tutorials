const play = document.getElementById('play');  //play button
const tribbles = [];
play.addEventListener('click', function() {
    placeTribbles();
});

function placeTribbles() {
    setInterval(randomPlaceImg, 1000); //stretch: speeds up over time
}

function randomPlaceImg() {
    // tribble.classList.remove('hidden');

    const tribble = document.createElement('div');
    tribble.id = Math.floor(Math.random() * Math.floor(1000));
    tribble.name = 'tribble';
    tribble.innerHTML = '<img src="./assets/tribble.png" id="theimage">';
    // tribble.innerHTML = '<img src="./assets/tribble.png" id="theimage" onclick="killTribble();">';
    tribbles.push(tribble);
    
    let randomx = Math.floor(Math.random() * Math.floor(700) + 1);
    console.log('randomx', randomx);
    let randomy = Math.floor(Math.random() * Math.floor(405) + 1);
    console.log('randomy', randomy);
    tribble.style.top = randomx + 'px';
    tribble.style.left = randomy + 'px';
    
    tribble.addEventListener('click', function killTribble() {
        if(tribble.id === tribbles[tribbles.length - 1].id) {
            tribble.classList.add('hidden');
            console.log(tribble.id);
        }
    });
    document.body.appendChild(tribble);
    
}
