
const icon = document.querySelector('.theme_icon');
function theme() {
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}



const playlistOnButton = document.getElementById('onPlaylistButton');
const playlistModeButton = document.getElementById('playlistModeButton');
const playlistModeP = document.getElementById('playlistModeP');

const playButtons = [
    document.getElementById('song1'),
    document.getElementById('song2'),
    document.getElementById('song3'),
    document.getElementById('song4'),
    document.getElementById('song5'),
    document.getElementById('song6'),
    document.getElementById('song7'),
    document.getElementById('song8'),
    document.getElementById('song9'),
    document.getElementById('song10'),
    document.getElementById('song11'),
    document.getElementById('song12'),
    document.getElementById('song13'),
    document.getElementById('song14'),
];

const progressBars = [
    document.getElementById('progress1'),
    document.getElementById('progress2'),
    document.getElementById('progress3'),
    document.getElementById('progress4'),
    document.getElementById('progress5'),
    document.getElementById('progress6'),
    document.getElementById('progress7'),
    document.getElementById('progress8'),
    document.getElementById('progress9'),
    document.getElementById('progress10'),
    document.getElementById('progress11'),
    document.getElementById('progress12'),
    document.getElementById('progress13'),
    document.getElementById('progress14'),
];

const timeActual = [
    document.getElementById('timeActual1'),
    document.getElementById('timeActual2'),
    document.getElementById('timeActual3'),
    document.getElementById('timeActual4'),
    document.getElementById('timeActual5'),
    document.getElementById('timeActual6'),
    document.getElementById('timeActual7'),
    document.getElementById('timeActual8'),
    document.getElementById('timeActual9'),
    document.getElementById('timeActual10'),
    document.getElementById('timeActual11'),
    document.getElementById('timeActual12'),
    document.getElementById('timeActual13'),
    document.getElementById('timeActual14'),
];

const timeAll = [
    document.getElementById('timeAll1'),
    document.getElementById('timeAll2'),
    document.getElementById('timeAll3'),
    document.getElementById('timeAll4'),
    document.getElementById('timeAll5'),
    document.getElementById('timeAll6'),
    document.getElementById('timeAll7'),
    document.getElementById('timeAll8'),
    document.getElementById('timeAll9'),
    document.getElementById('timeAll10'),
    document.getElementById('timeAll11'),
    document.getElementById('timeAll12'),
    document.getElementById('timeAll13'),
    document.getElementById('timeAll14'),

]
const audios = [
    new Audio('musicForMusicPage/theDistortionistGhost.mp3'),
    new Audio('musicForMusicPage/colorbarsGhost.mp3'),
    new Audio('musicForMusicPage/dontBeliveInT(TetoAndMiku).mp3'),
    new Audio('musicForMusicPage/videoplayback.m4a'),
    new Audio('musicForMusicPage/BUTCHER VANITY  Yi Xi.mp3'),
    new Audio('musicForMusicPage/Alan_Walker_Anne_Gudrun_Avalon.mp3'),
    new Audio('musicForMusicPage/20 - Battaille Decisive.mp3'),
    new Audio('musicForMusicPage/the-living-tombstone-my-ordinary-life.mp3'),
    new Audio('musicForMusicPage/Reckless Battery Burns (feat. Vane Lily).mp3'),
    new Audio('musicForMusicPage/Kelly_Clarkson_Stronger_What_Doesnt_Kill_You_CeeNaija_com_.mp3'),
    new Audio('musicForMusicPage/YOASOBI「UNDEAD」_Official_Music_Video／『〈物語〉シリーズ_オフ&モンスターシーズン』主題歌.mp3'),
    new Audio('musicForMusicPage/Yuma, Stardust, Asterian, Kevin  SCAPEG♾AT [Original Song].mp3'),
    new Audio('musicForMusicPage/thefatrat_feat_laura_brehm_monody_feat_laura_brehm_71940934.mp3'),
    new Audio('musicForMusicPage/【v4flower】HYPERDONTIA【Original Song Collaboration】.mp3')
];
const numberOfAudios = audios.length;



audios.forEach((audio, i) => {
    audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        const secondsStr = seconds < 10 ? '0' + seconds : seconds;
        timeAll[i].textContent = `${minutesStr}:${secondsStr}`;
    });
});



let currentAudio = null;
let currentButton = null;
let currentProgressBar = null;
let isDragging = false;

let playlistPlaying = false;



function song(index) {
    const audio = audios[index];
    const button = playButtons[index];
    const progress = progressBars[index];

    if (currentAudio === audio && !audio.paused) {
        audio.pause();

        button.textContent = '▶';
        playlistOnButton.textContent = '▶';
        return;
    }

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentButton.textContent = '▶';
        playlistOnButton.textContent = '▶';
        currentProgressBar.value = 0;
    }

    audio.play();
    button.textContent = '❚❚';
    currentAudio = audio;
    currentButton = button;
    currentProgressBar = progress;

    audio.ontimeupdate = () => {
        if (!isDragging) {
            const current = audio.currentTime;
            const duration = audio.duration;
            progress.value = (current / duration) * 1000;

            const minutes = Math.floor(current / 60);
            const seconds = Math.floor(current % 60);
            const minutesStr = minutes < 10 ? '0' + minutes : minutes;
            const secondsStr = seconds < 10 ? '0' + seconds : seconds;
            timeActual[index].textContent = `${minutesStr}:${secondsStr}`;
        }
    };

    audio.onended = () => {
        button.textContent = '▶';
        progress.value = 0;
        timeActual[index].textContent = '00:00'
        currentAudio = null;
        currentButton = null;
        currentProgressBar = null;
        nowIsSong = index + 1; 

        if (playlistPlaying) {
            if (mode === 0) {
                song(randomSong());
            }
            if (mode === 1) {
                nowIsSong = index + 1;
                if (nowIsSong >= numberOfAudios) nowIsSong = 0;
                song(nowIsSong);
            }   
        }

        
    };
}



progressBars.forEach((bar, index) => {
    bar.addEventListener('input', () => {
        isDragging = true;
    });

    bar.addEventListener('change', () => {
        const audio = audios[index];
        if (audio === currentAudio) {
            const newTime = (bar.value / 1000) * audio.duration;
            audio.currentTime = newTime;
        } else if (audio){
            audio.currentTime = (bar.value / 1000) * audio.duration;
        }
        isDragging = false;
    });
});






let nowIsSong = 0;
let mode = 0;



function randomSong() {
    let rand;
    do {
        rand = Math.floor(Math.random() * numberOfAudios);
    } while (rand === nowIsSong);
    nowIsSong = rand;
    return rand;
}


playlistModeButton.addEventListener('click', () => {
    if (playlistModeButton.textContent === '⤭') {
        playlistModeButton.textContent = '⟳';
        playlistModeP.textContent = 'Режим: по кругу';
        mode = 1;
    } else {
        playlistModeButton.textContent = '⤭';
        playlistModeP.textContent = 'Режим: рандом';
        mode = 0;
    }
});

playlistOnButton.addEventListener('click', () => {
    if (playlistOnButton.textContent === '▶') {
        playlistOnButton.textContent = '❚❚';
        playlistPlaying = true;
        if (mode === 0) {
            song(randomSong())
        } else if (mode === 1) {
            //nowIsSong = 0;
            song(nowIsSong)
        }
    } else {
        playlistOnButton.textContent = '▶';
        playlistPlaying = false;
        if (currentAudio) {
            currentAudio.pause();
        }
    }
});







function onPlaylist() {
    

}

function playlistMode() {

}