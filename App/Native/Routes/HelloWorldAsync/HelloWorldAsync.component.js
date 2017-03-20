import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class HelloWorldAsync extends Component {
  render () {
    const { asyncToggleColor, color } = this.props
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
        <Text onPress={asyncToggleColor} style={style.helloWorld}>Hello World</Text>
      </View>
    )
  }
}

HelloWorldAsync.propTypes = {
  color: PropTypes.string.isRequired,
  asyncToggleColor: PropTypes.func.isRequired
}
