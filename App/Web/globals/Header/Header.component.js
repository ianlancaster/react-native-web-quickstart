import React, { Component, PropTypes } from 'react'
import classes from './Header.styles.scss'
import HamburgerMenu from 'Globals/HamburgerMenu'

class Header extends Component {
  render () {
    const { toggleDrawer } = this.props

    return (
      <nav id={'header'} className={classes.header}>
        <div className='backButtonPlaceholder' style={{ width: '30px', height: '30px' }} />
        <p>Hello World</p>
        <HamburgerMenu
          onClick={toggleDrawer}
        />
      </nav>
    )
  }
}

Header.propTypes = {
  toggleDrawer: PropTypes.func
}

module.exports = Header
