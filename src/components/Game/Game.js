import World from './World'
import tileSelector from './tileSelector'
import tileDragging from './tileDragging'
import playerControls from './playerControls'
// import touchEvents from './touchEvents'
import MainMenu from '../../components/Menu/MainMenu/MainMenu'

export default function Game () {
  window.onfocus = function () {
    document.body.style.backgroundColor = 'rgb(230, 230, 230)'
  }

  window.onblur = function () {
    document.body.style.backgroundColor = 'rgb(140, 140, 140)'
  }

  function init () {
    var canvas = document.createElement('canvas')
    canvas.height = 320
    canvas.width = 320
    var ctx = canvas.getContext('2d')
    document.querySelector('.game').appendChild(canvas)
    return { ctx, canvas }
  }

  // For each of these steps, re-create the world.
  function step (direction) {
    // Erases canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    world.scene.draw(ctx, canvas)
    world.players.forEach(function (player) {
      player.move(ctx, direction, canvas, world)
      player.draw(ctx)
    })
    // Player moves
    if (direction) {
      world.monsters.forEach(function (monster) {
        monster.step(canvas.height, world, 'freeze')
        monster.draw(ctx)
      })
    } else {
      world.monsters.forEach(function (monster) {
        monster.step(canvas.height, world)
        monster.draw(ctx)
      })
    }
  }

  const { ctx, canvas } = init()
  const world = new World()
  tileSelector(canvas)
  tileDragging(canvas, world, ctx)

  window.addEventListener('load', function (event) {
    // window.setInterval(step, 500)
    step()
  }, false)

  // touchEvents()
  playerControls(step)
}
