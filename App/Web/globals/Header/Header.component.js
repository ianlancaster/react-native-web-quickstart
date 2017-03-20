import React, { Component, PropTypes } from 'react'
import { startCase } from 'lodash'
import { browserHistory } from '../../main'
import classes from './Header.styles.scss'
import HamburgerMenu from 'Globals/HamburgerMenu'

class Header extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    this.setState({
      text: startCase(window.location.pathname)
    })

    browserHistory.listen((location) => {
      this.setState({
        text: startCase(location.pathname)
      })
    })
  }

  render () {
    const { toggleDrawer, drawerOpen } = this.props
    const { text } = this.state

    return (
      <nav id={'header'} className={classes.header}>
        <div className='backButtonPlaceholder' style={{ width: '30px', height: '30px' }} />
        <p>{text}</p>
        <HamburgerMenu
          onClick={toggleDrawer}
          open={drawerOpen}
        />
      </nav>
    )
  }
}

Header.propTypes = {
  toggleDrawer: PropTypes.func,
  drawerOpen: PropTypes.bool
}

module.exports = Header
