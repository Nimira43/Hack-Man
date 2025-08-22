import { gridSize, cellSize, objectType, classesList } from './setup'

class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0
    this.grid = []
    this.DOMGrid = DOMGrid
  }

  showGameStatus(gameWin) {
    const div = document.createElement('div')
    div.classList.add('game-status')
    div.innerHTML = `
      ${gameWin
        ? 'You have won'
        : 'You are dead'
      }
    `
    this.DOMGrid.appendChild(div)
  }

  createGrid(level) {
    this.dotCount = 0
    this.grid = []
    this.DOMGrid.innerHTML = ''
    this.DOMGrid.style.cssText = `
      grid-template-columns: repeat(${gridSize}, ${cellSize}px)
    `

    level.forEach((square) => {
      const div = document.createElement('div')
      div.classList.add('sqaure', classesList[square])
      div.style.cssText = `
        width: ${cellSize}px; height: ${cellSize}px;
      `
      this.DOMGrid.appendChild(div)
      this.grid.push(div)

      if (classesList[square] === objectType.dot) this.dotCount++
    })

  }

  addObject(pos, classes) {
    this.grid[pos].classList.add(...classes)
  }

  removeObject(pos, classes) {
    this.grid[pos].classList.remove(...classes)
  }
  
  objectExists(pos, object) {
    return this.grid[pos].classList.contains(object)
  }
  
  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`
  }

  moveCharacter(character) {}

  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid)
    board.createGrid(level)
    return board
  }
}

export default GameBoard
