import { gridSize, cellSize, objectType, classesList } from './setup'

class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0
    this.grid = []
    this.DOMGrid = DOMGrid
  }

  showGameStatus(gameWin) {}

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
    })

  }

  addObject(pos, classes) {}
  removeObject(pos, classes) {}
  objectExists(pos, object) {}
  rotateDiv(pos, deg) {}
  moveCharacter(character) {}

  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid)
    board.createGrid(level)
    return board
  }
}

export default GameBoard
