import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './NavigationDrawer.styles.scss'
import logo from '../../../Assets/Images/ir.png'

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

        <img src={logo} style={classes.logo} />

        <Link
          to='hello-world'
          onClick={toggleDrawer}>
          <h2>Hello World</h2>
        </Link>

        <Link
          to='hello-world-async'
          onClick={toggleDrawer}>
          <h2>Hello World Async</h2>
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
