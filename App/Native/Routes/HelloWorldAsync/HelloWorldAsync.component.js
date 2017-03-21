import React, { Component, PropTypes } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { classes } from './HelloWorldAsync.styles'

export default class HelloWorldAsync extends Component {
  render () {
    const { asyncToggleColor, color, loading } = this.props

    return (
      <View style={classes.mainView}>
        {loading
          ? <ActivityIndicator />
          : <Text
            onPress={asyncToggleColor}
            style={[classes.helloWorld, { color }]}>
            Hello World!
          </Text>
        }
      </View>
    )
  }
}

HelloWorldAsync.propTypes = {
  color: PropTypes.string.isRequired,
  asyncToggleColor: PropTypes.func.isRequired,
  loading: PropTypes.bool
}
