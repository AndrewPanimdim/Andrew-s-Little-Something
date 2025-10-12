const minichar = document.getElementById('minicharacter');
const moveeffect = document.getElementById('moveEffect');

let charx = 2;
let chary = 0
const stepmini = 3;

stationary = true;


document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D'){
        charx += stepmini;
        if(charx > 103) {
            charx = -5
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























