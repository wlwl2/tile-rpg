export default function canvasDimensions () {
  const canvasLeft = document.querySelector('canvas').getBoundingClientRect().left
  const canvasRight = document.querySelector('canvas').getBoundingClientRect().right
  const canvasTop = document.querySelector('canvas').getBoundingClientRect().top
  const canvasBottom = document.querySelector('canvas').getBoundingClientRect().bottom
  const canvasWidth = canvasRight - canvasLeft
  const canvasHeight = canvasBottom - canvasTop
  return {canvasWidth, canvasHeight}
}
