function canvas6() {
    const canvas = document.getElementById('sixth');
    const ctx = canvas.getContext('2d');

    ctx.font = '30px Comic Sans MS';
    ctx.fillStyle = 'purple';
    ctx.textAlign = 'center';
    ctx.fillText('canvas6.js', canvas.width / 2, canvas.height / 2); //centers bottom line

}

export default canvas6;