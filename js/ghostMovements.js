import { directions, objectType } from './setup'

export function randomMovement(position, direction, objectExist) {
  const keys = Object.keys(directions) 
  let dir = direction 
  let nextMovePos = position + dir.movement 

  if (Math.random() < 0.3) {
    const key = keys[Math.floor(Math.random() * keys.length)] 
    dir = directions[key] 
    nextMovePos = position + dir.movement 
  }
 
  let attempts = 0 
  while (
    (objectExist(nextMovePos, objectType.wall) ||
     objectExist(nextMovePos, objectType.the_ghost)) &&
    attempts < 10
  ) {
    const key = keys[Math.floor(Math.random() * keys.length)] 
    dir = directions[key] 
    nextMovePos = position + dir.movement 
    attempts++ 
  }

  if (Math.random() < 0.1) {
    dir = directions[dir.opposite]; 
    nextMovePos = position + dir.movement
  }

  return { nextMovePos, direction: dir }
}
