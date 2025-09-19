
//LINK: https://andrewpanimdim.github.io/Andrew-s-Little-Something/Andrew.html


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
    darkmode.style.backgroundColor = 'rgb(255, 255, 255)';
    minichar.style.display = 'none';

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

   





const seemore = document.getElementById('SeeMore');
const page1 = document.getElementById('page1');
seemore.addEventListener('click', () => {
    page1.classList.add('show');
});

const photocontainer = [
    "https://github.com/AndrewPanimdim/Andrew-s-Little-Something/blob/main/photos/Andrew.Panimdim.jpg?raw=true", 
    "https://github.com/AndrewPanimdim/Andrew-s-Little-Something/blob/main/photos/humswek.jpg?raw=true",
    "https://github.com/AndrewPanimdim/Andrew-s-Little-Something/blob/main/photos/mama.jpg?raw=true",
    "https://github.com/AndrewPanimdim/Andrew-s-Little-Something/blob/main/photos/podium.jpg?raw=true",
    "https://github.com/AndrewPanimdim/Andrew-s-Little-Something/blob/main/photos/apcraa.jpg?raw=true"
];
const photoshowcase = document.getElementById('PhotoShowcasecontainer');
const photoshowcaseimg = document.getElementById('photoshowcase');
let photocontainerindex = 0;

photoshowcaseimg.src = photocontainer[photocontainerindex];

setInterval(() => {
    photocontainerindex++;
    if(photocontainerindex >= photocontainer.length){
        photocontainerindex = 0;
    }
    photoshowcaseimg.src = photocontainer[photocontainerindex];
    photoshowcaseimg.style.width = 'auto';
    photoshowcaseimg.style.height = '50vh';
}, 5000);

photoshowcaseimg.addEventListener('click', () => {
    photocontainerindex++;
    if(photocontainerindex >= photocontainer.length){
        photocontainerindex = 0;
    }
});




const minichar = document.getElementById('minicharacter');
const moveeffect = document.getElementById('moveEffect');

let charx = 60;

const stepmini = 3;
let ministatus = false;

stationary = true;

moveeffect.addEventListener('click', () => {
    ministatus = !ministatus;
    if (ministatus) {
        minichar.style.display = 'block';
        alert('use D and A or arrow keys to move right and left');
        hello.style.color = 'white';
        document.body.style.backgroundColor = 'rgba(15, 15, 15, 1)';
        background.style.display = 'none';
    } else {
        minichar.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'){
        charx += stepmini;
        minichar.style.left = charx + '%';
        stationary = false;
        minichar.src = 'gif/runningright.gif';
    }
    else if(event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A'){
        charx -= stepmini;
        minichar.style.left = charx + '%';
        stationary = false;
        minichar.src = 'gif/runningleft.gif';
    }
});

document.addEventListener('keyup', (event) => {
    if(['ArrowRight','ArrowLeft','a','A','d','D'].includes(event.key)){
        stationary = true;
        minichar.src = 'gif/standing.gif';
    }
});






















