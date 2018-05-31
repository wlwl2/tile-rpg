export default class Floor {
  constructor (x, y, entityNumber, ctx) {
    this.img = document.getElementById('overworldImg')
    this.sourceX = 272
    this.sourceY = 464
    this.x = x
    this.y = y
    this.entityNumber = 0
    this.srcWidth = 32
    this.srcHeight = 32
    this.size = 32
    this.category = 'terrain'
    this.collidable = 'no'
  }
}
