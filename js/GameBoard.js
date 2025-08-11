import { gridSize, cellSize, objectType, classList } from './setup'

class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0
    this.grid = []
    this.DOMGrid = DOMGrid
  }

  showGameStatus(gameWin) {}
  createGrid(level) {}
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
