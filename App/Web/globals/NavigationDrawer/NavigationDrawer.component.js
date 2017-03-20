import React, { Component, PropTypes } from 'react'
import classes from './NavigationDrawer.styles.scss'

class NavigationDrawer extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { exampleProp1 } = this.props
    return (
      <div className={classes.drawer}>
        <h2>Navigation Drawer {exampleProp1}</h2>
      </div>
    )
  }
}

NavigationDrawer.propTypes = {
  exampleProp1: PropTypes.number
}

module.exports = NavigationDrawer
