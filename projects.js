
const minichar = document.getElementById('minicharacterdd');
const moveeffect = document.getElementById('moveEffect');

let charx = 60;
let chary = 0
const stepmini = 3;
let ministatus = false;

stationary = true;

moveeffect.addEventListener('click', () => {
    ministatus = !ministatus;
    if (ministatus) {
        minichar.style.display = 'block';
        hello.style.color = 'white';
        document.body.style.backgroundColor = 'rgba(15, 15, 15, 1)';
        background.style.display = 'none';
        darkmode.style.backgroundColor = 'rgb(255, 255, 255)';
    } else {
        minichar.style.display = 'none';
    }
});

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'){
        charx += stepmini;
        if(charx > 103) {
            window.open('https://andrewpanimdim.github.io/Andrew-s-Little-Something/projects.html', '_blank');
        }
        minichar.style.left = charx + '%';
        stationary = false;
        minichar.src = 'gif/runningright.gif';
    }
    else if(event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A'){
        charx -= stepmini;
        if(charx < -5) {
            charx = 103;
        }
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