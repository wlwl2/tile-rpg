export default function gameMenu () {
  const overlay = document.querySelector('.overlay')
  const mouseInfo = document.querySelector('.mouse-info')
  const startMenu = document.querySelector('.start-menu')
  const gameMenu = document.querySelector('.game-menu')

  if (window.localStorage.getItem('inGame') === 'yes') {
    overlay.setAttribute('data-hidden', 'yes')
    mouseInfo.setAttribute('style', 'display: block;')
  }

  function hideAllSections () {
    const sections = document.querySelectorAll('.menu__section-container section')
    for (var i = 0; i < sections.length; i++) {
      sections[i].setAttribute('data-hidden', 'yes')
    }
  }

  // Arrow key events.
  window.addEventListener('keydown', function (event) {
    // console.log(event.key)
    if (!gameMenu) return
    if (gameMenu.getAttribute('data-hidden') === 'no') {
      if (event.key === 'ArrowDown') {
        // Select game menu item below current one.
      }
      if (event.key === 'ArrowUp') {
        // Select game menu item above current one.
      }
    }
  }, false)
}
