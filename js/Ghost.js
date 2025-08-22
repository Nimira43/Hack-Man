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
    if (this.timer === this.speed) {
      this.timer = 0
      return true
    } 
    this.timer++
  }

  getNextMove(objectExist) {
    const {nextMovePos, direction } = this.movement( 
      this.pos,
      this.dir,
      objectExist
    ) 

    return { 
      nextMovePos,
      direction
    }
  }

  makeMove() {
    const classesToRemove = [
      objectType.ghost,
      objectType.alerted,
      this.name
    ]
    let classesToAdd = [
      objectType.ghost,
      objectType.name
    ]

    if (this.isAlerted) classesToAdd = [
      classesToAdd,
      objectType.alerted
    ]
    
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