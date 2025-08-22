import { directions, objectType } from './setup'
import { randomMovement } from './ghostMovements'

class Ghost {
  constructor(speed = 5, startPos, movement, name) {
    this.name = name
    this.movement = movement
    this.startPos = startPos
    this.pos = startPos
    this.dir = directions.ArrowRight
    this.speed = speed
    this.timer = 0
    this.isAlerted = false
    this.rotation = false
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
    const classesToRemove = [objectType.hackman]
    const classesToAdd = [objectType.hackman]

    return {
      classesToRemove,
      classesToAdd
    }
  }

  setNewPos(nextMovePos, direction) {
    this.pos = nextMovePos
  }
}

export default Ghost