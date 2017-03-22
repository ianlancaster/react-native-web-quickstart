import React, { Component, PropTypes } from 'react'
import classes from './HelloWorldAsync.styles.scss'
import Loader from '../../Globals/Loader'

class HelloWorld extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { asyncToggleColor, color, loading } = this.props
    return (
      <div className={classes.container}>
        {loading ? <Loader />
        : <h2
          title='helloWorldAsync'
          onClick={asyncToggleColor}
          className={classes.text}
          style={{ color }}>
          Hello World!
        </h2>
        }
      </div>
    )
  }
}

HelloWorld.propTypes = {
  color: PropTypes.string.isRequired,
  asyncToggleColor: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

module.exports = HelloWorld
