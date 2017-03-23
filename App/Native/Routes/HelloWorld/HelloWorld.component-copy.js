import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { classes } from './HelloWorld.styles'

export default class HelloWorld extends Component {
  render () {
    return (
      <View style={classes.mainView}>
        <Text>
          Hello World!
        </Text>
      </View>
    )
  }
}
