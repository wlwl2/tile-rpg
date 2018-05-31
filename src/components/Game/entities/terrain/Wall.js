export default class Wall {
  constructor (x, y, entityNumber, ctx) {
    this.img = document.getElementById('overworldImg')
    this.sourceX = 352
    this.sourceY = 1
    this.x = x
    this.y = y
    this.entityNumber = 1
    this.srcWidth = 48
    this.srcHeight = 48
    this.size = 32
    this.category = 'terrain'
    this.collidable = 'yes'
  }
}
