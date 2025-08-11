import { objectType, directions } from './setup'

class Hackman {
  constructor(speed, startPos) {
    this.pos = startPos
    this.speed = speed
    this.dir = null
    this.timer = 0
    this.powerPill = false
    this.rotation = true
  }

  shouldMove() {}
  getNextMove(objectExist) {}
  makeMove() {}
  setNewPos(nextMovePos) {}
  handleKeyInput(e, objectExist) {}
}

export default Hackman