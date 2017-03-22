import React, { Component, PropTypes } from 'react'
import classes from './HelloWorld.styles.scss'

class HelloWorld extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { toggleColor, color } = this.props
    return (
      <div className={classes.container}>
        <h2
          title='helloWorld'
          onClick={toggleColor}
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
  toggleColor: PropTypes.func.isRequired
}

module.exports = HelloWorld
