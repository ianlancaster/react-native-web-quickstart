import React, { PropTypes } from 'react'
import classes from './Iphone.styles.scss'
import CoreLayout from 'globals/CoreLayout'

const Iphone = ({ children }) => {
  return (
    <div className={classes.iphone}>
      <div className={classes.outlet}>
        <CoreLayout>
          {children}
        </CoreLayout>
      </div>
    </div>
  )
}

Iphone.propTypes = {
  children: PropTypes.node
}

module.exports = Iphone
