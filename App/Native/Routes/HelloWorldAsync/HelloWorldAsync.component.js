import React, { Component, PropTypes } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { classes } from './HelloWorldAsync.styles'

export default class HelloWorldAsync extends Component {
  constructor () {
    super()

    this.renderComponent = this.renderComponent.bind(this)
    this.renderLoader = this.renderLoader.bind(this)
  }

  renderComponent () {
    const { asyncToggleColor, color } = this.props

    return (
      <View style={classes.mainView}>
        <Text
          onPress={asyncToggleColor}
          style={[classes.helloWorld, { color }]}>
          Hello World!
        </Text>
      </View>
    )
  }

  renderLoader () {
    return (<ActivityIndicator />)
  }

  render () {
    const { props, renderComponent, renderLoader } = this

    return (
      <View style={classes.mainView}>
        {props.loading ? renderLoader() : renderComponent()}
      </View>
    )
  }
}

HelloWorldAsync.propTypes = {
  color: PropTypes.string.isRequired,
  asyncToggleColor: PropTypes.func.isRequired
}
