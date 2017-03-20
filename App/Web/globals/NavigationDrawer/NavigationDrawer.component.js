import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './NavigationDrawer.styles.scss'

class NavigationDrawer extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { drawerOpen, toggleDrawer } = this.props
    const toggleStyle = drawerOpen ? { marginRight: 0 } : { marginRight: '-80%' }

    return (
      <div
        className={classes.drawer}
        style={toggleStyle}>

        <Link
          to='hello-world'
          onClick={toggleDrawer}>
          Hello World
        </Link>

        <Link
          to='hello-world-async'
          onClick={toggleDrawer}>
          Hello World | Async
        </Link>
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  drawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func
}

module.exports = NavigationDrawer
