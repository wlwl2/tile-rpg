import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import mainMenuScript from './mainMenuScript'
import startMenuScript from './StartMenu/startMenuScript'
import gameMenuScript from './GameMenu/gameMenuScript'

import StartMenu from './StartMenu/StartMenu'
import GameMenu from './GameMenu/GameMenu'
import HelpControls from './HelpControls/HelpControls'
import TileSelector from './Editor/Editor'
import About from './About/About'

class MainMenu extends Component {
  render () {
    return (
      <div className='menu__container'>
        <div className='menu__vertical-middle'>
          <div className='menu__horizontal-center'>
            <div className='menu__section-container'>
              <StartMenu />
              <GameMenu />
              <section className='continue' data-hidden='yes'></section>
              <HelpControls />
              <TileSelector />
              <About />
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    mainMenuScript()
    startMenuScript()
    gameMenuScript()
  }
}

// take this component html and put it on the page (in the DOM)
ReactDOM.render(<MainMenu />, document.querySelector('.menu'))
