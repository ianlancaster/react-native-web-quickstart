import React from 'react'
import classes from './HelloWorld.styles.scss'

const HelloWorld = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.text}>Hello World!</h2>
    </div>
  )
}

module.exports = HelloWorld
