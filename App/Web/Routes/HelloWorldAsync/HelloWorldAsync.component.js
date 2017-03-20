import React, { Component, PropTypes } from 'react'
import classes from './HelloWorldAsync.styles.scss'

class HelloWorld extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { asyncToggleColor, color } = this.props
    return (
      <div className={classes.container}>
        <h2
          onClick={asyncToggleColor}
          className={classes.text}
          style={{ color }}>
          Hello World!
        </h2>
      </div>
    )
  }
}

HelloWorld.propTypes = {
  color: PropTypes.string.isRequired,
  asyncToggleColor: PropTypes.func.isRequired
}

module.exports = HelloWorld