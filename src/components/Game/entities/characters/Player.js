export default class Player {
  constructor (x, y) {
    this.img = document.getElementById('characterImg')
    this.sourceX = 1
    this.sourceY = 6
    this.destinationX = x
    this.destinationY = y
    this.entityNumber = 2
    this.sizeX = 15
    this.sizeY = 22
    this.speed = 4
    this.category = 'character'
    this.collidable = 'yes'
    this.collidableTiles = []
    this.exp = 0
    this.health = 10
    this.attackPower = 3
    this.defense = 0
    this.spriteCounter = 0
    this.updateSprite = function (sourceX, sourceY, sizeX, sizeY) {
      this.sourceX = sourceX
      this.sourceY = sourceY
      this.sizeX = sizeX
      this.sizeY = sizeY
    }.bind(this)
  }
}

Player.prototype.draw = function draw (ctx) {
  ctx.drawImage(this.img, this.sourceX, this.sourceY, this.sizeX, this.sizeY,
    this.destinationX, this.destinationY, this.sizeX, this.sizeY)
}

// Moves the player one step.
Player.prototype.move = function move (ctx, direction, canvas, world) {
  const speed = this.speed
  const y = this.destinationY
  const x = this.destinationX
  world.scene.tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)
  switch (direction) {
    case 'up':
      // Prevents player from moving outside the canvas when moving up.
      if (this.destinationY - this.speed < 0) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y - speed][x]) >= 0) return

      if (this.spriteCounter === 0) {
        this.updateSprite(16, 70, 15, 22)
        this.spriteCounter = 1
      } else if (this.spriteCounter === 1) {
        this.updateSprite(32, 69, 15, 23)
        this.spriteCounter = 2
      } else if (this.spriteCounter === 2) {
        this.updateSprite(48, 70, 15, 22)
        this.spriteCounter = 3
      } else if (this.spriteCounter === 3) {
        this.updateSprite(0, 69, 15, 23)
        this.spriteCounter = 0
      }

      this.destinationY -= this.speed
      break
    case 'down':
      // Prevents player from moving outside the canvas when moving down.
      if (this.destinationY + this.sizeY > canvas.height) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y + speed][x]) >= 0) return

      if (this.spriteCounter === 0) {
        this.updateSprite(17, 7, 15, 21)
        this.spriteCounter = 1
      } else if (this.spriteCounter === 1) {
        this.updateSprite(33, 6, 15, 22)
        this.spriteCounter = 2
      } else if (this.spriteCounter === 2) {
        this.updateSprite(49, 7, 15, 21)
        this.spriteCounter = 3
      } else if (this.spriteCounter === 3) {
        this.updateSprite(1, 6, 15, 22)
        this.spriteCounter = 0
      }

      this.destinationY += this.speed
      break
    case 'right':
      // Prevents player from moving outside the canvas when moving right.
      if (this.destinationX + this.sizeX + this.speed > canvas.width) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y][x + speed]) >= 0) return

      if (this.spriteCounter === 0) {
        this.updateSprite(18, 39, 13, 21)
        this.spriteCounter = 1
      } else if (this.spriteCounter === 1) {
        this.updateSprite(34, 38, 13, 22)
        this.spriteCounter = 2
      } else if (this.spriteCounter === 2) {
        this.updateSprite(50, 39, 13, 21)
        this.spriteCounter = 3
      } else if (this.spriteCounter === 3) {
        this.updateSprite(2, 38, 13, 22)
        this.spriteCounter = 0
      }

      this.destinationX += this.speed
      break
    case 'left':
      // Prevents player from moving outside the canvas when moving left.
      if (this.destinationX - this.speed < 0) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y][x - speed]) >= 0) return

      if (this.spriteCounter === 0) {
        this.updateSprite(17, 103, 13, 21)
        this.spriteCounter = 1
      } else if (this.spriteCounter === 1) {
        this.updateSprite(33, 102, 13, 22)
        this.spriteCounter = 2
      } else if (this.spriteCounter === 2) {
        this.updateSprite(49, 103, 13, 21)
        this.spriteCounter = 3
      } else if (this.spriteCounter === 3) {
        this.updateSprite(1, 102, 13, 22)
        this.spriteCounter = 0
      }

      this.destinationX -= this.speed
      break
  }
}
