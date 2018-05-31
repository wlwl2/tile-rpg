import openMenu from './openMenu'

export default function mainMenuScript () {
  const menuContainer = document.querySelector('.menu__section-container')
  const overlay = document.querySelector('.overlay')
  const startMenu = document.querySelector('.start-menu__menu')

  function toggleInGame (inGame) {
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    gameState.inGame = inGame
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
  }

  // Set the initial state of game.
  window.localStorage.setItem('gameState', JSON.stringify({
    inGame: 'yes',
    menuSelected: 'startmenu',
    startMenuItemSelected: '1'
  }))

  var backToStartButtons = document.querySelectorAll('.back-to-start')

  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      if (menuContainer.getAttribute('data-shown') === 'yes') {
        // Hide Main Menu.
        menuContainer.setAttribute('data-shown', 'no')
        overlay.setAttribute('data-shown', 'no')
        toggleInGame('yes')
      } else {
        // Show Main Menu.
        menuContainer.setAttribute('data-shown', 'yes')
        overlay.setAttribute('data-shown', 'yes')
        toggleInGame('no')
        // select item from history
        const menuSelectedItem = JSON.parse(window.localStorage.getItem('gameState')).startMenuItemSelected
        var menuItems = startMenu.children
        for (var i = 0; i < menuItems.length; i++) {
          if (menuSelectedItem === menuItems[i].getAttribute('data-startmenuid')) {
            menuItems[i].focus()
            menuItems[i].setAttribute('data-selected', 'yes')
          }
        }

      }
    }
  }, false)
}
