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

  getNextMove(objectExist) {
    let nextMovePos = this.pos + this.dir.movement

    if ( 
      objectExist(nextMovePos, objectType.wall) || 
      objectExist(nextMovePos, objectType.wall) 
    ) {
      nextMovePos = this.pos
    }

    return { 
      nextMovePos,
      direction: this.dir
    }
  }

  makeMove() {
    const classesToRemove = [objectType.the_hackman]
    const classesToAdd = [objectType.the_hackman]

    return {
      classesToRemove,
      classesToAdd
    }
  }

  setNewPos(nextMovePos) {
    this.pos = nextMovePos
  }
  
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