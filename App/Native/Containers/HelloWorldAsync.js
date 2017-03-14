import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { toggleColor } from '../../Modules'

class HelloWorldAsync extends Component {
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

HelloWorldAsync.propTypes = {
  color: PropTypes.string.isRequired,
  toggleColor: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  toggleColor
}

const mapStateToProps = (state, ownProps) => ({
  color: state.color
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldAsync)
