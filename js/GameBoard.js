import { gridSize, cellSize, objectType, classList } from './setup'

class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0
    this.grid = []
    this.DOMGrid = DOMGrid
  }

  showGameStatus(gameWin) {}
  createLevel(level) {}
  addObject(pos, classes) {}
  removeObject(pos, classes) {}
  objectExists(pos, object) {}
  rotateDiv(pos, deg) {}
  moveCharacter(character) {}
  static createGameBoard(DOMGrid, level) {}
}

export default GameBoard
