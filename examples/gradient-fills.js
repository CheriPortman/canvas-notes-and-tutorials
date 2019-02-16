function gradientFills() {
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

    //RECTANGLE WITH A RADIAL/CIRCULAR GRADIENT
    const fourth = document.getElementById('fourth');
    const ctx4 = fourth.getContext('2d');

    const grd4 = ctx4.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd4.addColorStop(0, 'red');   //create gradient
    grd4.addColorStop(1, 'white');

    ctx4.fillStyle = grd4;   //fill with gradient
    ctx4.fillRect(10, 10, 150, 80);
}

export default gradientFills;