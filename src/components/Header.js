import React from 'react'
import PropTypes from 'prop-types'
import music from './Music'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-music" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>human-sensor-music</h1>
        <p>
          Generating music using the human interface <br />
          to create accessible music{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/music">App</Link>
        </li>
        <li>
          <a href="#about">
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <img src="https://fuzzywobble.com/images/sin_03.gif" width="42%"/>
    <img src="https://fuzzywobble.com/images/sin_03.gif" width="42%"/>
    <img src="https://fuzzywobble.com/images/sin_03.gif" width="42%"/>


  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
