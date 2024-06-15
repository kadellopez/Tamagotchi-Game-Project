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


const init = () => {
    gameMsg.classList.add('hidden')
    gameMsg.classList.remove('visible')
    resetButton.classList.add('hidden')
    resetButton.classList.remove('visible')
    
    gameOver = false

    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0

    timer = setInterval(runGame, 2000)

}

const render = () => {
    boredomStat.textContent = state.boredom;
    hungerStat.textContent = state.hunger;
    sleepinessStat.textContent = state.sleepiness; 
    
    if(gameOver === true) {
        clearInterval(timer)
    }

    if(gameOver === true) {
        if (gameMsg.classList.contains('hidden')) {
            gameMsg.classList.remove('hidden')
            gameMsg.classList.add('visible')
        }
    }

    if(gameOver === true) {
        if (resetButton.classList.contains('hidden')) {
            resetButton.classList.remove('hidden')
            resetButton.classList.add('visible')
        }
    }
}

const updateStates = () => {
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

const runGame = () => {
    updateStates('boredom')
    updateStates('hunger')
    updateStates('sleepiness')
    checkGameOver()
    render()
}

const playButtonClick = () => {
    state.boredom = 0
    render()
}

const feedButtonClick = () => {
    state.hunger = 0
    render()
}

const sleepButtonClick = () => {
    state.sleepiness = 0
    render()
}

init()
render()

/*----------- Event Listeners ----------*/

playButton.addEventListener('click', playButtonClick)
feedButton.addEventListener('click', feedButtonClick)
sleepButton.addEventListener('click', sleepButtonClick)
resetButton.addEventListener('click', init)