import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'
import Style from './Style'

class ReactStopWatch extends Component {

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text>00:02.96</Text>
        </View>
        <View style={Style.inputContainer}>
          <Text>Start</Text>
          <Text>Stop</Text>
        </View>
      </View>
    )
  }

}

AppRegistry.registerComponent('ReactStopWatch', () => ReactStopWatch)