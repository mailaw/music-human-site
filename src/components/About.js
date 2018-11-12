import React from 'react'
import PropTypes from 'prop-types'

const About = props => (
  <div id="about" style={props.timeout ? { display: 'none' } : {}}>
  <div class="content">
    <h1>ABOUT</h1>
    <h2>
      Motivation 
    </h2>
    <p>This project is about bringing hardware and software together to make an application
      that generates music using sensory data inputted by humans. The idea is that no matter 
      a person's range of movement, they can make music that is unique to their "human interface."
      This is essentially a simple applciation that turns a human into a "MIDI"!
    </p>
    <h2>Documentation</h2>
    <p>You can check out the git repo <a href="https://github.com/mailaw/human-music-site">here</a> and see some of the documentation of the 
    development process <a href="https://docs.google.com/document/d/1CMGYDp18SFRHS9bfEy68mz3mcQBrm9fMskt1JpT7NMQ/edit?usp=sharing">here </a></p>
  </div>
  </div>
)

About.propTypes = {
  timeout: PropTypes.bool,
}

export default About
