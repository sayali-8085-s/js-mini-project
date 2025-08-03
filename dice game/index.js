function play() {
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    const imageUrl = `url("${diceNumber}.png")`;

    const b = document.getElementById('main');
    if (b) {
        b.style.backgroundImage = imageUrl;
        b.style.backgroundSize = 'cover';
        b.style.backgroundRepeat = 'no-repeat';
        b.style.backgroundPosition = 'center';
    }
}
