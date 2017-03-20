import React, { Component, PropTypes } from 'react'
import classes from './Header.styles.scss'
import HamburgerMenu from 'globals/HamburgerMenu'

class Header extends Component {
  render () {
    return (
      <nav id={'header'} className={classes.header}>
        <div className='backButtonPlaceholder' style={{ width: '30px', height: '30px' }} />
        <p>Hello World</p>
        <HamburgerMenu
          onClick={() => console.log('ping')}
        />
      </nav>
    )
  }
}

Header.propTypes = {
  toggleDrawer: PropTypes.func
}

module.exports = Header
