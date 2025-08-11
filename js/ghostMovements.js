import { directions, objectType } from './setup'

export function randomMovement(position, direction, objectExist) {
  let dir = direction
  let nextMovePos = position + dir.movement
  const keys = Object.keys(directions)

  while (
    objectExist(nextMovePos, objectType.wall) ||
    objectExist(nextMovePos, objectType.ghost)
  ) {
    const key = keys[Math.floor(Math.random() * keys.length)]
    dir = directions[key]
    nextMovePos = position + dir.movement
  }
  return { nextMovePos, direction: dir }
}