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
      e, gameBoard.objectExist.bind(gameBoard)
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
  gameBoard.moveCharacter(hackman)
  checkCollision(hackman, ghosts)
  ghosts.forEach((ghost) => gameBoard.moveCharacter(ghost))
  checkCollision(hackman, ghosts)

  if (gameBoard.objectExist(hackman.pos, objectType.dot)) {
    playAudio(soundDot)
    gameBoard.removeObject(hackman.pos, [objectType.dot])
    gameBoard.dotCount--
    score += 10
  }

  if (gameBoard.objectExist(hackman.pos, objectType.pill)) {
    playAudio(soundPill)
    gameBoard.removeObject(hackman.pos, [objectType.pill])
    hackman.powerPill = true
    score += 50

    clearTimeout(powerPillTimer)
    powerPillTimer = setTimeout(
      () => (
        hackman.powerPill = false
      ),
      powerPillTime
    )
  }

  if (hackman.powerPill !== powerPillActive) {
    powerPillActive = hackman.powerPill
    ghosts.forEach((ghost) => ghost.isAlerted = hackman.powerPill)
  }

  if (gameBoard.dotCount === 0) {
    gameWin = true
    gameOver(hackman, gameGrid)
  }
  scoreTable.innerHTML = score
}

function startGame() {
  playAudio(startIntro)
  gameWin = false
  powerPillActive = false
  score = 0
  startButton.classList.add('hide')
  gameBoard.createGrid(level)

  const hackman = new Hackman(2, 287)
  gameBoard.addObject(287, objectType.hackman)
  document.addEventListener('keydown', (e) => hackman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard)))

  const ghosts = [
    new Ghost(5, 188, randomMovement, objectType.neville),
    new Ghost(4, 209, randomMovement, objectType.gertie),
    new Ghost(3, 230, randomMovement, objectType.brash),
    new Ghost(2, 251, randomMovement, objectType.frank)
  ]

  timer = setInterval(() => gameLoop(hackman, ghosts), globalSpeed)
}

startButton.addEventListener('click', startGame)