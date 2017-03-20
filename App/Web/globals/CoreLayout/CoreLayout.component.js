import React, { Component, PropTypes } from 'react'
import Header from 'globals/Header'
import classes from './CoreLayout.styles.scss'
// import MainNav from 'globals/MainNav'
import NavigationDrawer from 'globals/NavigationDrawer'

class CoreLayout extends Component {
  render () {
    const { children } = this.props
    return (
      <div id='coreLayout' className={classes.coreLayout}>
        <div className={classes.applicaion}>
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
  children: PropTypes.node
}

module.exports = CoreLayout
