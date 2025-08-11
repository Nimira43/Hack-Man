import { level, objectType } from './js/setup'
import GameBoard from './js/GameBoard'
import Hackman from './js/Hackman'
import Ghost from './js/Ghost'
import { randomMovement } from './js/ghostMovements'
import soundDot from './sounds/eat.wav'
import soundPill from './sounds/pill.wav'
import soundGameStart from './sounds/start-game.wav'
import soundGameOver from './sounds/death.wav'
import soundGhost from './sounds/eat-ghost.wav'
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

function playAudio(audio) {
  const soundEffect = new Audio(audio)
  soundEffect.play()
}

function gameOver() {
  playAudio(soundGameOver)
}

function checkCollision() {}
function gameLoop() {}

function startGame() {
  playAudio(soundGameStart)
}

startButton.addEventListener('click', startGame)