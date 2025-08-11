const gameGrid = document.querySelector('#game')
const scoreTable = document.querySelector('#score')
const startButton = document.querySelector('#start-btn')
const powerPillTime = 10000
const globalSpeed = 80

// const gameBoard

let score = 0
let timer = null
let gameWin = false
let powerPillActive = false
let powerPillTimer = null