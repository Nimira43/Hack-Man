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

  shouldMove() {}
  getNextMove(objectExist) {}
  makeMove() {}
  setNewPos(nextMovePos, direction) {}
}

export default Ghost