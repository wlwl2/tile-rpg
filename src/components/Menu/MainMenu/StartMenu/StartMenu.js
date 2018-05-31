import React from 'react'

const StartMenu = (props) => {
  return (
    <section
      className="start-menu"
      data-hidden="no"
      data-menuid="startmenu"
      data-startmenuid="0"
    >
      <div className="start-menu__title">
        Browser RPG
      </div>
      <ul className="start-menu__menu">
        <li data-selected="no" data-startmenuid="1">New Game</li>
        <li data-selected="no" data-startmenuid="2">Continue</li>
        <li data-selected="no" data-startmenuid="3">Help/Controls</li>
        <li data-selected="no" data-startmenuid="4">Game Editor</li>
        <li data-selected="no" data-startmenuid="5">About</li>
      </ul>
      <div className="start-menu__controls">
        <p>Use arrow keys to navigate the menu.</p>
        <p>Press Enter to select a menu item.</p>
        <p>Press Escape to cancel or close the menu.</p>
      </div>
    </section>
  )
}

export default StartMenu
