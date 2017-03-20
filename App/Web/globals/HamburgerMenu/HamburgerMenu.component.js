import React, { Component, PropTypes } from 'react'
import classes from './HamburgerMenu.styles.scss'

class HamburgerMenu extends Component {
  onClick () {
    const { onClick } = this.props
    if (onClick) onClick()
  }

  render () {
    const { open } = this.props
    const currentClass = open ? `${classes.navIcon} ${classes.navIconOpen}` : classes.navIcon
    return (
      <div className={currentClass} onClick={() => this.onClick()}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    )
  }
}

HamburgerMenu.propTypes = {
  onClick: PropTypes.any,
  open: PropTypes.bool
}

module.exports = HamburgerMenu
