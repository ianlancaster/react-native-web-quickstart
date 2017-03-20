import React, { Component, PropTypes } from 'react'
import classes from './HamburgerMenu.styles.scss'

class HamburgerMenu extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  toggleState () {
    this.setState({ open: !this.state.open })
  }

  onClick () {
    this.toggleState()

    const { onClick } = this.props
    if (onClick) onClick()
  }

  render () {
    const currentClass = this.state.open ? `${classes.navIcon} ${classes.navIconOpen}` : classes.navIcon
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
  onClick: PropTypes.any
}

module.exports = HamburgerMenu
