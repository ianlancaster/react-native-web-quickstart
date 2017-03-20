import React, { PropTypes } from 'react'
import classes from './NavIconLink.styles.scss'
import { Link } from 'react-router'

const NavIconLink = ({ icon, label, route }) => {
  return (
    <li>
      <Link to={route}>
        <img className={classes.icon} src={icon} />
        <p className={`${classes.label} miniature`}>{label}</p>
      </Link>
    </li>
  )
}

NavIconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

module.exports = NavIconLink
