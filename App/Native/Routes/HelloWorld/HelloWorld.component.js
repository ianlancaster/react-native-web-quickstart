import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { styles } from './HelloWorld.styles'

export default class HelloWorld extends Component {
  render () {
    const { toggleColor, color } = this.props

    return (
      <View style={styles.mainView}>
        <Text onPress={toggleColor} style={[styles.helloWorld, { color }]}>Hello World</Text>
      </View>
    )
  }
}

HelloWorld.propTypes = {
  color: PropTypes.string.isRequired,
  toggleColor: PropTypes.func.isRequired
}
