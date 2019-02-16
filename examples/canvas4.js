function canvas4() {
    //RECTANGLE WITH A RADIAL/CIRCULAR GRADIENT
    const fourth = document.getElementById('fourth');
    const ctx4 = fourth.getContext('2d');
    
    const grd4 = ctx4.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd4.addColorStop(0, 'red');   //create gradient
    grd4.addColorStop(1, 'white');
    
    ctx4.fillStyle = grd4;   //fill with gradient
    ctx4.fillRect(10, 10, 150, 80);

    //add some text (see canvas 5 and 6)
    ctx4.font = '30px fantasy';
    ctx4.fillStyle = 'purple';
    ctx4.fillText('canvas4.js', 10, 95);
}
 
export default canvas4;