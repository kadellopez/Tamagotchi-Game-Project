/*-------------- Constants -------------*/
state = [
   {boredom: 0 },
   {hunger: 0},
   {sleepiness: 0}
]

/*---------- Variables (state) ---------*/
let timer;
let gameOver;

/*----- Cached Element References  -----*/
const boredomStat = document.querySelector('#boredom-stat')
const hungerStat = document.querySelector('#hunger-stat')
const sleepinessStat = document.querySelector('#sleepiness-stat')


const playButton = document.querySelector('#play')
const feedButton = document.querySelector('feed')
const sleepButton = document.querySelector('sleep')

const gameMsg = document.querySelector('#message')
const resetButton = document.querySelector('#restart')



/*-------------- Functions -------------*/


const init = () => {
    //let gameOver = false;
    const timer = setInterval(runGame, 2000)
    //console.log(init)
}

const runGame = () => {
    //console.log('Game Running')
    updateStates()
    render()
}

render = () => {
    boredomStat.textContent = state.boredom;
    hungerStat.textContent = state.hunger;
    sleepinessStat.textContent = state.sleepiness;
  }

const updateStates = (value) => {
    if(state[value] === 0);
    state[value] = Math.floor(Math.random() * 4) 
    console.log(state[value])
}

// const render = () => {
    
// }

init()
render()




/*----------- Event Listeners ----------*/