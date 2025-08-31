const startbutton =  document.getElementById('start');
const hello = document.getElementById('hello');
let windowstatus = false;
startbutton.addEventListener('click', () => {
    windowstatus = !windowstatus;
    if (windowstatus) {
        document.body.style.backgroundColor = 'rgba(15, 15, 15, 1)';
        hello.style.display = 'block';
        document.getElementById('container').style.display = 'block';
        //document.getElementById('littlesomething').style.display = 'block';
    } else {
        hello.style.display = 'none';
    }
});

const darkmode = document.getElementById('dark-mode');
let darkmodestatus = false;
darkmode.addEventListener('click', () =>{
    darkmodestatus = !darkmodestatus;
    if(darkmodestatus){
        document.body.style.backgroundColor = 'white';
        hello.style.color = 'black';
        background.style.display = 'none';
        darkmode.style.backgroundColor = 'rgba(26, 26, 26, 1)';
        darkmode.classList.add('dark');
    }else{
        document.body.style.backgroundColor = 'rgba(15, 15, 15, 1)';
        hello.style.color = 'white';
        background.style.display = 'none';
        darkmode.style.backgroundColor = 'rgb(255, 255, 255)';
        darkmode.classList.remove('dark');
    }
});

const backgrounds = ['https://i.pinimg.com/originals/82/88/e9/8288e9eec7c66c0790ee546462b8e204.gif', 'http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-50.gif','https://i.pinimg.com/originals/42/b4/22/42b4229a9ec3145edaa895b2415dd720.gif']
let backgroundindex = 1;
const cbg = document.getElementById('change-background');
const background = document.getElementById('background');
cbg.addEventListener('click', () => {
    backgroundindex++;
    hello.style.color = 'white';
    player.style.display = 'none';
    darkmode.style.backgroundColor = 'rgb(255, 255, 255)';
    if (backgroundindex >= backgrounds.length) {
        backgroundindex = 0;   
    }
    background.src = backgrounds[backgroundindex];
    background.style.display = 'block';
});


const start = document.getElementById('start');
start.addEventListener('click', () => {
    start.style.animation = 'start 0.5s forwards';
});

const player = document.getElementById('dot');
    let x = 100, y = 100;
    const step = 10;
document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowUp' || event.key === 'w' || event.key === 'W'){
        y -= step;
    }
    else if(event.key === 'ArrowDown' || event.key === 's' || event.key === 'S'){
        y += step;
    }
    else if(event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A'){
        x -= step;
    }
    else if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'){
        x += step;
    }

    player.style.left = x + 'px';
    player.style.top = y + 'px';

});

const red = document.getElementById('MovementMiniGame');
let gamestatus = false;
let n = 1;
red.addEventListener('click',() =>{
    gamestatus = !gamestatus;
if(n===1){
    alert('click W A S D to move');
    n--;
}
if(gamestatus){
    player.style.display = 'block';
} else {
    player.style.display = 'none';
}
});


const moveEffect = document.getElementById('moveEffect');
