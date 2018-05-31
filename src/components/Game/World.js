import Monster from './entities/characters/Monster'
import Player from './entities/characters/Player'
import Scene from './Scene'
import canvasDimensions from './canvasDimensions'

// Contains players and monsters.
export default function World () {
  const gridcells = 10
  const monsters = this.monsters = []
  monsters.push(new Monster(32, 32), new Monster(64, 64))
  const players = this.players = []
  players.push(new Player(128, 128))
  // Set the initial height and width of the grid (or game board) in cells.
  this.scene = new Scene(gridcells, gridcells)
}

World.prototype.addEntity = function addEntity ([worldX, worldY], entityType) {
  if (entityType) {
    this.scene.grid[worldY][worldX] = Number(entityType)
  }
}

// Returns the x and y coordinates in terms of grid cells.
World.prototype.screenToWorld = function screenToWorld ([screenX, screenY]) {
  const {canvasWidth, canvasHeight} = canvasDimensions() // dimensions in pixels
  const tilesWidth = canvasWidth / this.scene.width
  const tilesHeight = canvasHeight / this.scene.height
  return [Math.floor(screenX / tilesWidth), Math.floor(screenY / tilesHeight)]
}
