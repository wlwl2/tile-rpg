import openMenu from '../openMenu'

export default function startMenu () {
  var startMenuItems = document.querySelector('.start-menu__menu').children
  function resetStartMenu () {
    for (var i = 0; i < startMenuItems.length; i++) {
      startMenuItems[i].setAttribute('data-selected', 'no')
    }
  }
  function selectStartMenuItem (itemSelected) {
    resetStartMenu()
    for (var i = 0; i < startMenuItems.length; i++) {
      if (startMenuItems[i].getAttribute('data-startmenuid') === itemSelected) {
        startMenuItems[i].focus()
        startMenuItems[i].setAttribute('data-selected', 'yes')
      }
    }
  }

  const startMenu = document.querySelector('.start-menu__menu')
  window.addEventListener('click', function (event) {
    if (!startMenu) return
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    if (gameState.inGame !== 'no') return
    const startMenuItemId = event.target.getAttribute('data-startmenuid')
    if (!startMenuItemId) return
    if (startMenuItemId !== '0') {
      gameState.startMenuItemSelected = startMenuItemId
      window.localStorage.setItem('gameState', JSON.stringify(gameState))
      selectStartMenuItem (startMenuItemId)
    }
    if (gameState.menuSelected === 'startmenu') {
      if (gameState.startMenuItemSelected === '3') {
        openMenu('3')
        gameState.menuSelected = 'helpmenu'
      }
      if (gameState.startMenuItemSelected === '4') {
        openMenu('4')
        gameState.menuSelected = 'editormenu'
      }
      if (gameState.startMenuItemSelected === '5') {
        openMenu('5')
        gameState.menuSelected = 'aboutmenu'
      }
    } else {
      openMenu('0')
      gameState.menuSelected = 'startmenu'
    }
    window.localStorage.setItem('gameState', JSON.stringify(gameState))
  })

  window.addEventListener('keydown', function (event) {
    if (!startMenu) return
    const gameState = JSON.parse(window.localStorage.getItem('gameState'))
    if (gameState.inGame === 'yes') return
    // Select start menu item below current one.
    if (event.key === 'ArrowDown') {
      const selectedMenuItem = Number(gameState.startMenuItemSelected)
      if (selectedMenuItem === startMenuItems.length) {
        gameState.startMenuItemSelected = '1'
      } else {
        gameState.startMenuItemSelected = String(selectedMenuItem + 1)
      }
      window.localStorage.setItem('gameState', JSON.stringify(gameState))
      selectStartMenuItem(gameState.startMenuItemSelected)
    }
    // Select start menu item above current one.
    if (event.key === 'ArrowUp') {
      const selectedMenuItem = Number(gameState.startMenuItemSelected)
      if (selectedMenuItem === 1) {
        gameState.startMenuItemSelected = String(startMenuItems.length)
      } else {
        gameState.startMenuItemSelected = String(selectedMenuItem - 1)
      }
      window.localStorage.setItem('gameState', JSON.stringify(gameState))
      selectStartMenuItem(gameState.startMenuItemSelected)
    }

    if (event.key === 'Enter') {
      if (gameState.menuSelected === 'startmenu') {
        if (gameState.startMenuItemSelected === '3') {
          openMenu('3')
          gameState.menuSelected = 'helpmenu'
        }
        if (gameState.startMenuItemSelected === '4') {
          openMenu('4')
          gameState.menuSelected = 'editormenu'
        }
        if (gameState.startMenuItemSelected === '5') {
          openMenu('5')
          gameState.menuSelected = 'aboutmenu'
        }
      } else {
        openMenu('0')
        gameState.menuSelected = 'startmenu'
      }
      window.localStorage.setItem('gameState', JSON.stringify(gameState))
    }
  }, false)
}
