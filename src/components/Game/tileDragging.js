export default function tileDragging (canvas, world, ctx) {
  const currentTile = document.querySelector('.currently-selected-tile')
  if (!currentTile) return
  let mouseHeld = false
  let hoveredOverTiles = []
  let duplicate = 0
  function redraw () {
    world.scene.draw(ctx, canvas)
    world.monsters.forEach(function (monster) {
      monster.draw(ctx)
    })
    world.players.forEach(function (player) {
      player.draw(ctx)
    })
  }

  const canvasLeft = document.querySelector('canvas').getBoundingClientRect().left
  const bodyLeft = document.body.getBoundingClientRect().left
  const marginLeft = canvasLeft - bodyLeft

  canvas.addEventListener('mousedown', function (event) {
    mouseHeld = true
    hoveredOverTiles = []
    const pos = world.screenToWorld([event.clientX - marginLeft, event.clientY])
    hoveredOverTiles.push(pos)
  }, false)

  // Canvas is redrawn with the tiles in hoveredOverTiles array.
  canvas.addEventListener('mouseup', function (event) {
    if (!currentTile) return
    mouseHeld = false
    if (!currentTile.children[0]) return
    if (!currentTile.children[0].getAttribute('data-entity-number')) return
    for (var j = 0; j < hoveredOverTiles.length; j++) {
      world.addEntity(hoveredOverTiles[j], currentTile.children[0].getAttribute('data-entity-number'))
    }
    redraw()
  }, false)

  // Positions of the tiles that were hovered on during the mouse hold will be
  // added to the hoveredOverTiles array. This is then drawn on canvas.
  canvas.addEventListener('mousemove', function (event) {
    if (!currentTile) return
    if (!currentTile.children[0]) return
    if (!currentTile.children[0].getAttribute('data-entity-number')) return
    if (mouseHeld === true) {
      const pos = world.screenToWorld([event.clientX - marginLeft, event.clientY])
      duplicate = 0
      for (var i = 0; i < hoveredOverTiles.length; i++) {
        if ((hoveredOverTiles[i][0] === pos[0]) && (hoveredOverTiles[i][1] === pos[1])) {
          duplicate += 1
        }
      }
      if (duplicate === 0) {
        hoveredOverTiles.push(pos)
      }
      for (var j = 0; j < hoveredOverTiles.length; j++) {
        world.addEntity(hoveredOverTiles[j], currentTile.children[0].getAttribute('data-entity-number'))
      }
      redraw()
    }
  }, false)
}
