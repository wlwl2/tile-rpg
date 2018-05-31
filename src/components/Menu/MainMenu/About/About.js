import React from 'react'

const About = (props) => {
  return (
    <section
      className="about"
      data-hidden="yes"
      data-menuid="aboutmenu"
      data-startmenuid="5"
    >
      <p>
        <a href="https://github.com/wlwl2/browser-rpg">
          Source
        </a>
      </p>
      <p>
        <a href="https://wlwl2.com">
          wlwl2
        </a>
      </p>
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

export default About
