
//LINK: https://andrewpanimdim.github.io/Andrew-s-Little-Something/Andrew.html


const drewsdata = {
  name: "Earl Andrew C. Panimdim",
  nickname: "drew",
  age: 19,
  course: "Bachelor of Science in Computer Science",
  school: "National University - Asia Pacific College",
  birthday: "April 23, 2006",
  hobbies: "basketball, bass",
  language: "python, javascript, css",
  favorite: {
    color: "black and white",
    shoe: "jordan 3 and air force 1",
    food: "pepperoni pizza",
    character: "batman and spiderman",
    player: "devin booker",
    movie: "spider-man: into the spider-verse",
    car: "porche 911",
    "programming language": "python javascript and css"
  },
  dream: {
    job: "torn between ai engineer, Cybersecurity and web developer",
    school: "University of the Philippines Diliman",
    girl: "Lola Tung"
  },
  ex: 2,
  status: "single",
  siblings: 4,
  hometown: "Makati City",
  laptop: "ASUS TUF Gaming A15",
  phone: "Iphone 11",
  friends: "Rakim, Rommel, Eugui, Sean, Neil, Kerby, Kevin",
  friend: "jose francis romanillos, he might be a little gay but he mah boi fr"
};


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
        darkmode.textContent = 'dark Mode';
        darkmode.classList.remove('light');
        darkmode.classList.add('darkk');

    }else{
        document.body.style.backgroundColor = 'rgba(15, 15, 15, 1)';
        hello.style.color = 'white';
        background.style.display = 'none';
        darkmode.style.backgroundColor = 'rgb(255, 255, 255)';
        darkmode.classList.remove('dark');
        darkmode.textContent = 'light Mode';
        darkmode.classList.add('light');
        darkmode.classList.remove('darkk');
    }
});




const backgrounds = ['https://i.pinimg.com/originals/82/88/e9/8288e9eec7c66c0790ee546462b8e204.gif', 'http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-50.gif','https://i.pinimg.com/originals/42/b4/22/42b4229a9ec3145edaa895b2415dd720.gif']
let backgroundindex = 0;
const cbg = document.getElementById('change-background');
const background = document.getElementById('background');
cbg.addEventListener('click', () => {
    backgroundindex++;
    hello.style.fontFamily = 'bungee';
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




const minichar = document.getElementById('minicharacter');
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
        if(charx > 92) {
            window.location.href = 'https://andrewpanimdim.github.io/Andrew-s-Little-Something/projects.html';
            charx = 92;
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

const box6 = document.getElementById('box6');
box6.addEventListener('click', () => {
    page1.classList.remove('show');
    document.body.style.backgroundColor = 'rgba(15, 15, 15, 1)';
    hello.style.color = 'white';
    background.style.display = 'none';
    darkmode.style.backgroundColor = 'rgb(255, 255, 255)';
    darkmode.classList.remove('dark');
    darkmode.textContent = 'light Mode';
    darkmode.classList.add('light');
    darkmode.classList.remove('darkk');
});


const fonts = ['bungee','rog fonts', 'cooper black','poppins', 'Lora', 'oswald','nunito','times new roman', 'arial' ]
let fontpos = 0
const helloo = document.getElementById('hello')

helloo.addEventListener('click',()=>{
    fontpos++;
    if( fontpos >= fonts.length) {
        fontpos = 0;
    } 
    helloo.style.fontFamily = fonts[fontpos]
});




const andrewvid = ['videos/vid1.mp4', 'videos/vid2.mp4', 'videos/asl.mp4'];
const andvid = document.getElementById('andrewvideo');
let andrewvidindex = 0;

setInterval(() => {
    andrewvidindex+=1;
    andvid.src = andrewvid[andrewvidindex];
    if(andrewvidindex >= andrewvid.length){
        andrewvidindex = 0;
    }
},10000);



andvid.src = andrewvid[andrewvidindex];