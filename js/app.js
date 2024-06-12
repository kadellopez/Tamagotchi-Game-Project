/*-------------- Constants -------------*/
let state = {
   boredom: 0,
   hunger: 0,
   sleepiness: 0
}

/*---------- Variables (state) ---------*/
let timer;
let gameOver = false;

/*----- Cached Element References  -----*/
const boredomStat = document.querySelector('#boredom-stat')
const hungerStat = document.querySelector('#hunger-stat')
const sleepinessStat = document.querySelector('#sleepiness-stat')


const playButton = document.querySelector('#play')
const feedButton = document.querySelector('#feed')
const sleepButton = document.querySelector('#sleep')

const gameMsg = document.querySelector('#message')
const resetButton = document.querySelector('#restart')



/*-------------- Functions -------------*/


let init = () => {
    timer = setInterval(runGame, 2000)
}

let render = () => {
    boredomStat.textContent = state.boredom;
    hungerStat.textContent = state.hunger;
    sleepinessStat.textContent = state.sleepiness; 
    
    if(gameOver === true) {
        clearInterval(timer)
    }
}

let updateStates = () => {
    if (!gameOver) {
        if (Math.random() < 0.5) { 
            state.boredom++
        }
        if (Math.random() < 0.5) {
            state.hunger++
        }
        if (Math.random() < 0.5) {
            state.sleepiness++
        }
    }
}

const checkGameOver = () => {
    if(state.boredom === 10) {
        gameOver = true
    }
    if(state.hunger === 10) {
        gameOver = true
    }
    if(state.sleepiness === 10) {
        gameOver = true
    }
}

let runGame = () => {
    updateStates('boredom')
    updateStates('hunger')
    updateStates('sleepiness')
    checkGameOver()
    render()
}

init()
render()

/*----------- Event Listeners ----------*/
