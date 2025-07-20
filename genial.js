const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});


const welcome = document.querySelector('.welcome');
const title = document.querySelector('.title');

function resetAll() {
    const range = document.getElementById('pi_input');
    const output = document.getElementById('value');
    range.value = 0;
    output.value = 0;
    output.textContent = 0; 

    const elements = document.querySelectorAll('.nameP');
    elements.forEach(el => el.innerHTML = " ");

    lol()
}

let titleSize = 20;

function lol() {
    setInterval(() => {
        welcome.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        title.style.fontSize = titleSize + 'px';
        titleSize += 0.01;
        document.body.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
}, 10);
}

const lleters = ["А","Б","В","Г","Д","Е","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];

function change(element, a, b, c, d, e, f) {
    element.innerHTML = lleters[Math.floor(Math.random() * lleters.length)];
    a.innerHTML = lleters[Math.floor(Math.random() * lleters.length)];
    b.innerHTML = lleters[Math.floor(Math.random() * lleters.length)];
    c.innerHTML = lleters[Math.floor(Math.random() * lleters.length)];
    d.innerHTML = lleters[Math.floor(Math.random() * lleters.length)];
    e.innerHTML = lleters[Math.floor(Math.random() * lleters.length)];
    f.innerHTML = lleters[Math.floor(Math.random() * lleters.length)];
}

function changeValue() {
    const div = document.getElementById('pi_input');
    if (div.style.width === '100000%') {
        div.style.width = '100%';
        div.style.transform = 'skew(0deg, 0deg)';
    } else {
        div.style.width = '100000%';
        div.style.transform = 'skew(10deg, 10deg)';
    }
}

document.querySelectorAll('.sendButton').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        btn.style.position = 'absolute';
        btn.style.left = Math.random() * 80 + '%';
        btn.style.top = Math.random() * 80 + '%';
        
    });
});


welcome.addEventListener('click', function() {
    welcome.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});



document.body.addEventListener('click', function() {
    document.body.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    
    });



