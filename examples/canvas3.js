function canvas3() {
    //RECTANGLE WITH GRADIENT FILL
    const thirdCanvas = document.getElementById('third');
    const ctx3 = thirdCanvas.getContext('2d');
    //create gradient
    const grd = ctx3.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, 'blue');
    grd.addColorStop(1, 'white');
    //fill with gradient
    ctx3.fillStyle = grd;
    ctx3.fillRect(10, 10, 150, 80);

        //add some text (see canvas 5 and 6)
    ctx3.font = '30px fantasy';
    ctx3.fillStyle = 'purple';
    ctx3.fillText('canvas3.js', 10, 95);
}

export default canvas3;