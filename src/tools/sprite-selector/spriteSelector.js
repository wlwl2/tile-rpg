var canvas = document.querySelector('.canvas'),
  ctx = canvas.getContext('2d')

var img = new Image()
img.src = 'characters.png'

var spriteWidth = 736,
  spriteHeight = 128,
  pixelsLeft = 0,
  pixelsTop = 0,

    // Where are we going to draw
    // the sprite on the canvas
  canvasPosX = 0,
  canvasPosY = 0

ctx.drawImage(img, pixelsLeft, pixelsTop, spriteWidth, spriteHeight, canvasPosX,
    canvasPosY, spriteWidth, spriteHeight)

// Note: ctx.fillRect(x, y, width, height)

// // x-axis rulers. Top left x is xStart
// function xLines1 (xStart, xEnd) {
//   ctx.fillStyle = 'rgba(10, 58, 164, 0.5)'
//   ctx.fillRect(xStart, 0, 1, 40)
//   ctx.fillRect(xEnd, 0, 1, 40)
// }
// xLines1(9, 23)
//
// // y-axis rulers. Top left y is yStart
// function yLines2 (yStart, yEnd) {
//   ctx.fillStyle = 'rgba(10, 58, 164, 0.5)'
//   ctx.fillRect(0, yStart, 40, 1)
//   ctx.fillRect(0, yEnd, 40, 1)
// }
// yLines2(12, 31)

// function xLines1 (xStart, xEnd) {
//   ctx.fillStyle = 'rgba(10, 164, 11, 0.5)'
//   ctx.fillRect(xStart, 0, 1, 80)
//   ctx.fillRect(xEnd, 0, 1, 80)
// }
// xLines1(9, 23)
//
// // y-axis rulers. Top left y is yStart
// function yLines2 (yStart, yEnd) {
//   ctx.fillStyle = 'rgba(10, 164, 11, 0.5)'
//   ctx.fillRect(0, yStart, 40, 1)
//   ctx.fillRect(0, yEnd, 40, 1)
// }
// yLines2(42, 63)

// function xLines1 (xStart, xEnd) {
//   ctx.fillStyle = 'rgba(193, 212, 46, 0.5)'
//   ctx.fillRect(xStart, 0, 1, 120)
//   ctx.fillRect(xEnd, 0, 1, 120)
// }
// xLines1(6, 23)
//
// // y-axis rulers. Top left y is yStart
// function yLines2 (yStart, yEnd) {
//   ctx.fillStyle = 'rgba(193, 212, 46, 0.5)'
//   ctx.fillRect(0, yStart, 40, 1)
//   ctx.fillRect(0, yEnd, 40, 1)
// }
// yLines2(73, 95)

function xLines1 (xStart, xEnd) {
  ctx.fillStyle = 'rgba(10, 58, 164, 0.5)'
  ctx.fillRect(xStart, 0, 1, 160)
  ctx.fillRect(xEnd, 0, 1, 160)
}
xLines1(8, 23)

// y-axis rulers. Top left y is yStart
function yLines2 (yStart, yEnd) {
  ctx.fillStyle = 'rgba(10, 58, 164, 0.5)'
  ctx.fillRect(0, yStart, 40, 1)
  ctx.fillRect(0, yEnd, 40, 1)
}
yLines2(114, 127)
