export default class Grass {
  constructor (x, y, entityNumber, ctx) {
    this.img = document.getElementById('tree4')
    this.sourceX = 0
    this.sourceY = 0
    this.x = x
    this.y = y
    this.entityNumber = 5
    this.srcWidth = 32
    this.srcHeight = 32
    this.size = 32
    this.category = 'terrain'
    this.collidable = 'yes'
  }
}
