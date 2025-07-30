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

const timer = document.getElementById('timer');
let seconds = 0;
let minuts = 5;

function startTimer() {
    if (seconds === 0) {
        if (minuts === 0) {
            timer.textContent = "Ты потратил 5 минут своей жизни";
            audio.play();
            return; 
        }
        minuts--;
        seconds = 59;
    } else {
        seconds--;
    }
    timer.textContent = `${String(minuts).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    setTimeout(startTimer, 1000);
}
startTimer();



function playSound1() {
    const audio = new Audio('sounds/among-us-roundstart.mp3');
    audio.play();
}


const title = document.querySelector('.header_title');
function changeTitle() {
    const titles = [
        "Сайт от Хлеба",
        "ALTERGAN",
        "Тут много пасхалок",
        "do re mi do re do",
        "random()",
        "Тут игры будут",
        "Сайт для развлечения",
        "Tetoris",
        "Don't belive in T",
        " ",
        "Тут будет много всякой фигни",
        "Ghost and Pals",
        "--- -.- .- -.-",
        "𝕜𝕚𝕣𝕚𝕖𝕤𝕙𝕜𝕚"
    ];
    const randomTitle = Math.floor(Math.random() * titles.length);
    title.textContent = titles[randomTitle];
}


const bodyColor = document.querySelector('body');
function randomColorBody() {
    const colors = [
        '#FF5733',
        '#33FF57',  
        '#3357FF',  
        '#F1C40F',  
        '#8E44AD', 
        '#E67E22', 
        '#2ECC71', 
        '#3498DB',
        '#141010',
    ];
    const randomColor = Math.floor(Math.random() * colors.length);
    bodyColor.style.backgroundColor = colors[randomColor];
}


function playSound2() {
    const audio = new Audio('sounds/deathPaletteSong.mp3');
    audio.play();
}


const headerColor = document.querySelector('header');
const imageChange = document.getElementById('catimg');
function changeAll() {
    theme();
    playSound1();
    changeTitle();
    randomColorBody();
    playSound2();

    const colors = [
        '#FF5733',
        '#33FF57',  
        '#3357FF',  
        '#F1C40F',  
        '#8E44AD', 
        '#E67E22', 
        '#2ECC71', 
        '#3498DB',
        '#141010',
    ];
    const randomColor = Math.floor(Math.random() * colors.length);
    headerColor.style.backgroundColor = colors[randomColor];

    imageChange.src = "images/deathPaletteImg1.jpg";
}

function bomb() {
    const bombImg = document.getElementsByClassName('bombImg')[0];
    bombImg.classList.remove("hidden");
    bombImg.classList.add("visible");

    const audio = new Audio("sounds/huge-explosion-87823.mp3");
    audio.play();
    for (let i = 0; i < 100; i++) {
    setTimeout(() => {
            audio.play();
        }, 7000);
    }
}




