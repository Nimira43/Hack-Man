import { level, objectType } from './js/setup'
import GameBoard from './js/GameBoard'
import Hackman from './js/Hackman'
import Ghost from './js/Ghost'
import { randomMovement } from './js/ghostMovements'
import soundDot from './sounds/eat.wav'
import soundPill from './sounds/pill.wav'
import startIntro from './sounds/intro-dark.mp3'
import soundGameOver from './sounds/death.wav'
import soundGhost from './sounds/eat-ghost.mp3'
const gameGrid = document.querySelector('#game')
const scoreTable = document.querySelector('#score')
const startButton = document.querySelector('#start-btn')
const powerPillTime = 10000
const globalSpeed = 80

const gameBoard = GameBoard.createGameBoard(gameGrid, level)

let score = 0
let timer = null
let gameWin = false
let powerPillActive = false
let powerPillTimer = null

function playAudio(audio) {
  const soundEffect = new Audio(audio)
  soundEffect.play()

}

function gameOver(hackman, grid) {
  playAudio(soundGameOver)
  document.removeEventListener('keydown', (e) => 
    hackman.handleKeyInput(
      e, gameBoard.objectExists.bind(gameBoard)
    )
  )

  gameBoard.showGameStatus(gameWin)
  clearInterval(timer)
  startButton.classList.remove('hide')
}

function checkCollision(hackman, ghosts) {
  const collidedGhost = ghosts.find((ghost) => hackman.pos === ghost.pos)

  if (collidedGhost) {
    if (hackman.powerPill) {
      playAudio(soundGhost)
      gameBoard.removeObject(collidedGhost.pos, [
        objectType.ghost,
        objectType.alerted,
        collidedGhost.name
      ])
      collidedGhost.pos = collidedGhost.startPos
      score += 100
    } else {
      gameBoard.removeObject(hackman.pos, [objectType.hackman])
      gameBoard.rotateDiv(hackman.pos, 0)
      gameOver(hackman, gameGrid)
    }
  }
}

function gameLoop(hackman, ghosts) {

}

function startGame() {
  playAudio(startIntro)
  gameBoard.createGrid(level)
}

startButton.addEventListener('click', startGame)