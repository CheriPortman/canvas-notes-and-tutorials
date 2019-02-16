function canvas5() {
    //filled Text
    const canvas01 = document.getElementById('fifth');
    const ctx = canvas01.getContext('2d');
    ctx.font = '30px fantasy';
    ctx.fillText('text!', 10, 30);  //(text, x, y) draws 'filled' text on the canvas

    //stroke Text
    ctx.font = '30px fantasy';
    ctx.strokeText('hello world', 10, 55);

    //add some text (see canvas 5 and 6)
    ctx.font = '30px fantasy';
    ctx.fillStyle = 'purple';
    ctx.fillText('canvas5.js', 10, 95);
}

export default canvas5;