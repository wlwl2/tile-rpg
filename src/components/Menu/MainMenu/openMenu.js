export default function openMenu (menuSelectedId) {
  var menuSections = document.querySelector('.menu__section-container').children
  function resetMenus () {
    for (var i = 0; i < menuSections.length; i++) {
      menuSections[i].setAttribute('data-hidden', 'yes')
    }
  }
  function openStartMenuItem (menuSelectedId) {
    resetMenus()
    for (var i = 0; i < menuSections.length; i++) {
      if (menuSections[i].getAttribute('data-startmenuid') === menuSelectedId) {
        menuSections[i].setAttribute('data-hidden', 'no')
      }
    }
  }
  openStartMenuItem(menuSelectedId)
}
