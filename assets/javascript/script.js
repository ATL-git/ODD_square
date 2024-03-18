
const carreContainer = document.querySelector('#carreContainer')

let arrayCarre = ["carreOne", "carreTwo", "carreThree"]
let color = ["#FC3105", "#F1FC05", "#F30723", "#4F0551", "#F5A2AC", "#FCAA05", "#51050E", "#1005FC", "#B2888D"]
let score = 0
let timer = 30
let inter = null

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameContainer() {

    carreContainer.innerHTML = ""
    let randoma = random(0, color.length - 1)
    let randomi = random(0, color.length - 1)

    while (randoma == randomi) {
        randoma = random(0, color.length - 1)
    }
    let randomo = random(0, 2)

    for (let i = 0; i <= 2; i++) {
        let carre = document.createElement('div')
        carre.classList.add('carre')
        if (i == randomo) {
            carre.style.backgroundColor = color[randoma]
            carre.addEventListener('click', () => {
                win()
            })
        } else {
            carre.style.backgroundColor = color[randomi]
        }
        carreContainer.appendChild(carre)
    }

}

function game() {
    gameContainer()
    inter = setInterval(() => {
        timer--
        document.querySelector('#timer').innerHTML = `timer : ${timer} s`
        if (timer <= 0) {
            carreContainer.innerHTML = ""
            clearInterval(inter)
        }
        console.log(timer);
    }, 1000);



}


function win() {

    score++
    document.querySelector('#score').innerHTML = `score : ${score}`
    gameContainer()
   
}


function restart() {
    score = 0
    document.querySelector('#score').innerHTML = `score : ${score}`
    timer = 30
    document.querySelector('#timer').innerHTML = `timer : ${timer} s`
    game()
}



game()