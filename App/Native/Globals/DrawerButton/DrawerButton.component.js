// @flow

import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './DrawerButton.styles'

class DrawerButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

DrawerButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default DrawerButton
