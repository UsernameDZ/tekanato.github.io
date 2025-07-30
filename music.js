const playButtons = [
    document.getElementById('song1'),
    document.getElementById('song2'),
    document.getElementById('song3')
];

const progressBars = [
    document.getElementById('progress1'),
    document.getElementById('progress2'),
    document.getElementById('progress3')
];

const audios = [
    new Audio('sounds/theDistortionistGhost.mp3'),
    new Audio('sounds/colorbarsGhost.mp3'),
    new Audio('sounds/dontBeliveInT(TetoAndMiku).mp3')
];

let currentAudio = null;
let currentButton = null;
let currentProgressBar = null;
let isDragging = false;



function song(index) {
    const audio = audios[index];
    const button = playButtons[index];
    const progress = progressBars[index];

    if (currentAudio === audio && !audio.paused) {
        audio.pause();
        button.textContent = '▶';
        return;
    }

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentButton.textContent = '▶';
        currentProgressBar.value = 0;
    }

    audio.play();
    button.textContent = '❚❚';
    currentAudio = audio;
    currentButton = button;
    currentProgressBar = progress;

    audio.ontimeupdate = () => {
        if (!isDragging) {
            progress.value = (audio.currentTime / audio.duration) * 1000 || 0;
        }
    };

    audio.onended = () => {
        button.textContent = '▶';
        progress.value = 0;
        currentAudio = null;
        currentButton = null;
        currentProgressBar = null;
    };
}



progressBars.forEach((bar, index) => {
    bar.addEventListener('input', () => {
        isDragging = true;
    });

    bar.addEventListener('change', () => {
        const audio = audios[index];
        if (audio.duration) {
            audio.currentTime = (bar.value / 1000) * audio.duration;
        }
        isDragging = false;
    });
});
