function canvas7() {
    window.onload = function() {
        const canvas = document.getElementById('myStars');
        const ctx = canvas.getContext('2d');
        const picture = document.getElementById('stars');
        ctx.drawImage(picture, 10, 10);
    }
}

export default canvas7;