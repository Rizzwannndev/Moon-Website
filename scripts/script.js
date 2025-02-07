const sound = new Audio('./background-music.mp3');

sound.volume = 0.5;

sound.loop = true;

let isPlaying = false;

document.body.addEventListener('mouseenter', () => {
    if (!isPlaying) {
        sound.play();
        isPlaying = true;
    }
});

document.body.addEventListener('mouseleave', () => {
    if (isPlaying) {
        sound.pause();
        isPlaying = false;
    }
});

sound.addEventListener('ended', () => {
    sound.currentTime = 0;
    if (isPlaying) {
        sound.play();
    }
});
