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
      div.classList.add('square', classesList[square])
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
  
  objectExist(pos, object) {
    return this.grid[pos].classList.contains(object)
  }
  
  rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`
  }

  moveCharacter(character) {
    if (character.shouldMove()) {
      const { 
        nextMovePos, 
        direction 
      } = character.getNextMove(
        this.objectExist.bind(this)
      )
      
      const { 
        classesToRemove, 
        classesToAdd 
      } = character.makeMove() 

      if (character.rotation && nextMovePos !== character.pos) {
        this.rotateDiv(nextMovePos, character.dir.rotation)
        this.rotateDiv(character.pos, 0)
      }

      this.removeObject(character.pos, classesToRemove)
      this.addObject(nextMovePos, classesToAdd)
      character.setNewPos(nextMovePos, direction)
    }
  }

  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid)
    board.createGrid(level)
    return board
  }
}

export default GameBoard

