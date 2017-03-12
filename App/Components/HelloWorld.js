import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    const style = StyleSheet.create({
      helloWorld: {
        color: 'black',
        textAlign: 'center',
      }
    });

    return (
      <View>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
        <Text style={style.helloWorld}>Hello World</Text>
      </View>
    );
  }
}
