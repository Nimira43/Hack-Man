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

  shouldMove() {
    if (!this.dir) return
    if (this.timer === this.speed) {
      this.timer = 0
      return true
    } 
    this.timer++
  }

  getNextMove(objectExist) {}
  makeMove() {}
  setNewPos(nextMovePos) {}
  
  handleKeyInput(e, objectExist) {
    let dir

    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = directions[e.key]
    } else {
      return
    }

    const nextMovePos = this.pos + dir.movement
    if (objectExist(nextMovePos, objectType.wall)) return
    this.dir = dir
  }
}

export default Hackman