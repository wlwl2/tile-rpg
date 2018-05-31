export default class Monster {
  constructor (x, y) {
    this.img = document.getElementById('logImg')
    this.srcX = 4
    this.srcY = 7
    this.srcWidth = 21
    this.srcHeight = 23
    this.destX = x
    this.destY = y
    this.entityNumber = 3
    this.destWidth = 21
    this.destHeight = 23
    this.size = 23
    this.speed = 4
    this.category = 'monster'
    this.collidable = 'yes'
    this.collidableTiles = []
    this.exp = 0
    this.health = 5
    this.attackPower = 1
    this.defense = 0
    this.expReward = 5
    this.spriteCounter = 0
    this.updateSprite = function (sourceX, sourceY, sizeX, sizeY) {
      this.sourceX = sourceX
      this.sourceY = sourceY
      this.sizeX = sizeX
      this.sizeY = sizeY
    }.bind(this)
  }
}

Monster.prototype.draw = function draw (ctx) {
  ctx.drawImage(this.img, this.srcX, this.srcY, this.srcWidth, this.srcHeight,
    this.destX, this.destY, this.destWidth, this.destHeight)
}

Monster.prototype.step = function step (canvasLength, world, freeze) {
  const speed = this.speed / this.speed
  const y = this.destY / this.speed
  const x = this.destX / this.speed
  // Collates all the colliable tiles into this.collidableTiles.
  if (!world) return
  world.scene.tiles.forEach(function (Tile) {
    let tileObj = new Tile()
    if (tileObj.collidable === 'yes') {
      this.collidableTiles.push(tileObj.entityNumber)
    }
  }, this)

  // Randomly makes the monster move one step in one of 4 directions.
  const next = {x: this.destX, y: this.destY}
  const nextY = next.y / this.speed
  const nextX = next.x / this.speed
  switch (Math.floor(Math.random() * 4)) {
    case 0: // up.
      // Prevents monster from moving outside the canvas when moving up.
      if (next.y - this.speed < 0) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[nextY - speed][x]) >= 0) return
      next.y -= this.speed
      // if (this.spriteCounter === 0) {
      //   this.updateSprite(16, 70, 15, 22)
      //   this.spriteCounter = 1
      // } else if (this.spriteCounter === 1) {
      //   this.updateSprite(32, 69, 15, 23)
      //   this.spriteCounter = 2
      // } else if (this.spriteCounter === 2) {
      //   this.updateSprite(48, 70, 15, 22)
      //   this.spriteCounter = 3
      // } else if (this.spriteCounter === 3) {
      //   this.updateSprite(0, 69, 15, 23)
      //   this.spriteCounter = 0
      // }
      break
    case 1: // down.
      // Prevents monster from moving outside the canvas when moving down.
      if (this.destY + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[nextY + speed][x]) >= 0) return
      next.y += this.speed
      break
    case 2: // right.
      // Prevents monster from moving outside the canvas when moving right.
      if (this.destX + this.speed * 2 > canvasLength) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y][nextX + speed]) >= 0) return
      next.x += this.speed
      break
    case 3: // left.
      // Prevents monster from moving outside the canvas when moving left.
      if (this.destX - this.speed < 0) return
      // Collidable terrain detection.
      // if (this.collidableTiles.indexOf(world.scene.grid[y][nextX - speed]) >= 0) return
      next.x -= this.speed
      break
  }
  // Collision detection between monsters.
  let canMove = true
  world.monsters.forEach(function (monster) {
    if (monster === this) return
    if (!canMove) return
    if (!(monster.destX > next.x + this.size ||
        monster.destX + monster.size <= next.x ||
        monster.destY > next.y + this.size ||
        monster.destY + monster.size <= next.y)
    ) {
      canMove = false
    }
  }, this)
  if (freeze) {
    this.step(world.monsters)
    return
  }
  if (canMove) {
    this.destX = next.x
    this.destY = next.y
  } else {
    this.step(world.monsters)
  }
}
