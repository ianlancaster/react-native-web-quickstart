import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { asyncToggleColor } from '../../Modules/helloWorldAsync'

class HelloWorldAsync extends Component {
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

const mapDispatchToProps = {
  asyncToggleColor
}

const mapStateToProps = (state, ownProps) => ({
  color: state.helloWorldAsync.color
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldAsync)
