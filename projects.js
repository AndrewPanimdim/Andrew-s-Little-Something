const minichar = document.getElementById('minicharacter');
const moveeffect = document.getElementById('moveEffect');

let charx = 2;
let chary = 0
const stepmini = 3;

stationary = true;

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'){
        charx += stepmini;
        if(charx > 93) {
            charx = 93;
        }
        minichar.style.left = charx + '%';
        stationary = false;
        minichar.src = 'gif/runningright.gif';
    }
    else if(event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A'){
        charx -= stepmini;
        if(charx < -1) {
            charx = -1;
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























