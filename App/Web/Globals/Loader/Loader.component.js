import React from 'react'
import classes from './Loader.styles.scss'

const Loader = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.loader} />
      <div className={classes.loaderbefore} />
      <div className={classes.circular} />
      <div className={`${classes.circular} ${classes.another}`} />
      <div className={classes.text}>Loading</div>
    </div>
  )
}

module.exports = Loader
