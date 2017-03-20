import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class HelloWorld extends Component {
  render () {
    const { toggleColor, color } = this.props
    const style = StyleSheet.create({
      mainView: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center'
      },
      helloWorld: {
        color: color,
        textAlign: 'center'
      }
    })

    return (
      <View style={style.mainView}>
        <Text onPress={toggleColor} style={style.helloWorld}>Hello World</Text>
      </View>
    )
  }
}

HelloWorld.propTypes = {
  color: PropTypes.string.isRequired,
  toggleColor: PropTypes.func.isRequired
}
