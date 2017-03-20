import React, { Component, PropTypes } from 'react'
import Header from 'Globals/Header'
import classes from './CoreLayout.styles.scss'
// import MainNav from 'Globals/MainNav'
import NavigationDrawer from 'Globals/NavigationDrawer'

class CoreLayout extends Component {
  render () {
    const { children, drawerOpen } = this.props
    const toggleStyle = drawerOpen ? { marginLeft: '-80%' } : { marginLeft: 0 }

    return (
      <div id='coreLayout' className={classes.coreLayout}>
        <div
          className={classes.applicaion}
          style={toggleStyle}>
          <Header />
          <main className={classes.main}>
            {children}
          </main>
        </div>
        <NavigationDrawer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node,
  drawerOpen: PropTypes.bool
}

module.exports = CoreLayout
