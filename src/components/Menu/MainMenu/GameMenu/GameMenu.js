import React from 'react'

const GameMenu = (props) => {
  return (
    <section
      className="game-menu"
      data-hidden="yes"
      data-menuid="gamemenu"
    >
      <div className="game-menu__title">
        Game Menu
      </div>
      <ul className="game-menu__menu">
        <li tabIndex='0'>Status</li>
        <li tabIndex='0'>Inventory</li>
        <li tabIndex='0'>Exit Game</li>
      </ul>
    </section>
  )
}

export default GameMenu
