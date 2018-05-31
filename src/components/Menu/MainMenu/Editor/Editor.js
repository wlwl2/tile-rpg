// TileSelector
import React from 'react'

const TileSelector = (props) => {
  return (
    <section
      className="tile-selector"
      data-hidden="yes"
      data-menuid="editormenu"
      data-startmenuid="4"
    >
      <div>Game Editor</div>
      <div className="tile-list">
        <div className="player" draggable="true" data-entity-number="2"></div>
        <div className="monster" draggable="true" data-entity-number="3"></div>
        <div className="grass" draggable="true" data-entity-number="4"></div>
        <div className="tree" draggable="true" data-entity-number="5"></div>
      </div>
      <div className="currently-selected-tile">
        Currently selected tile:
      </div>
      <button className="reset-tile-button">Reset currently selected tile</button>
      <div
        data-selected='yes'
        className="back-to-start"
        data-startmenuid="0"
      >
        Back to Start Menu
      </div>
    </section>
  )
}

export default TileSelector
