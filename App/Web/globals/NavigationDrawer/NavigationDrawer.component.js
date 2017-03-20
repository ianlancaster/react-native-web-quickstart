import React, { Component, PropTypes } from 'react'
import classes from './NavigationDrawer.styles.scss'

class NavigationDrawer extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { drawerOpen } = this.props
    const toggleStyle = drawerOpen ? { width: '80%' } : { width: 0 }

    return (
      <div
        className={classes.drawer}
        style={toggleStyle}>
        <h2>Navigation Drawer</h2>
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  drawerOpen: PropTypes.bool
}

module.exports = NavigationDrawer
