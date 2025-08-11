export const gridSize = 20
export const cellSize = 20

export const directions = {
  ArrowLeft: {
    code: 37,
    movement: -1,
    rotation: 180
  },
  ArrowUp: {
    code: 38,
    movement: -gridSize,
    rotation: 270
  },
  ArrowRight: {
    code: 39,
    movement: 1,
    rotation: 0
  },
  ArrowDown: {
    code: 40,
    movement: gridSize,
    rotation: 90
  },
}

export const objectType = {
  blank: 'blank',
  wall: 'wall',
  dot: 'dot',
  neville: 'neville',
  gertie: 'gertie',
  brash: 'brash',
  frank: 'frank',
  pill: 'pill',
  hackman: 'hackman',
  ghost: 'ghost',
  ghostLair: 'lair'
}