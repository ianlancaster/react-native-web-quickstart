import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { styles } from './HelloWorldAsync.styles'

export default class HelloWorldAsync extends Component {
  render () {
    const { asyncToggleColor, color } = this.props

    return (
      <View style={styles.mainView}>
        <Text onPress={asyncToggleColor} style={[styles.helloWorld, { color }]}>Hello World</Text>
      </View>
    )
  }
}

HelloWorldAsync.propTypes = {
  color: PropTypes.string.isRequired,
  asyncToggleColor: PropTypes.func.isRequired
}
