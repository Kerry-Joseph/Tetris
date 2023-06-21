let canvas 
let ctx // context - provides functions for canvas drawing
let gBArrayHeight = 20 // height of gameboard - 20 squares vertical 
let gBArrayWidth = 12 // width of gameboard - 12 squares across
let startX = 4 // start for tetris shape - 4 squares over
let startY = 0 // start for tetris shape - top of board
let coordinateArray = [...Array(gBArrayHeight)].map(e => Array(gBArrayWidth).fill(0))
let currentTetromino = [[1, 0], [0, 1], [1, 1], [2, 1]] // current tetris shape
/* 
A Tetromino is made up of 4 (x, y) coordinates
    ex.
        0 1 2 3
      0   x
      1 x x x
      2

*/
let tetrominos = []
let tetrominoColors = ['purple', 'cyan', 'blue', 'yellow', 'orange', 'green', 'red']
let currentTetrominoColor

let gameBoardArray = [...Array(gBArrayHeight)].map(e => Array(gBArrayWidth).fill(0))

let DIRECTION = {
  IDLE: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
}
let direction

class Coordinates{
  constructor(x, y){
    this.x = x
    this.y = y
  }
}

document.addEventListener('DOMContentLoaded', setupCanvas)

/*
  creates an object for each square on the gameboard containing
  the squares coordinates (in pixels) 
*/
const createCoordArray = () => {
  let i = 0, j = 0
  for(let y = 9; y <= 446; y += 23){
    for(let x = 11; x <= 264; x += 23){
      coordinateArray[i][j] = new Coordinates(x, y)
      i++
    }
    j++
    i = 0
  }
}


const setupCanvas = () => {
  canvas = document.getElementById('my-canvas')
  ctx = canvas.getContext('2d') // provides canvas drawing functions 
  canvas.width = 936
  canvas.height = 956

  ctx.scale(2, 2) 

  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = 'black'
  ctx.strokeRect(8, 8, 280, 462) // (startX, startY, width, height)

  createCoordArray()  
  drawTetromino()
}

const drawTetromino = () => {
  for(let i = 0; i < currentTetromino.length; i++){
    let x = currentTetromino[i][0] + startX
    let y = currentTetromino[i][1] + startY
    gameBoardArray[x][y] = 1
    let coorX = coordinateArray[x][y].x
    let coorY = coordinateArray[x][y].y
    ctx.fillStyle = currentTetrominoColor
    ctx.fillRect(coorX, coorY, 21, 21)
  }
}