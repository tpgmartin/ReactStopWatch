import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'
import InputButton from './InputButton'
import Style from './Style'

const inputButtons = [
  'Start',
  'Stop'
]

class ReactStopWatch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      elapsedTime: 0,
      totalTime: 0,
      timeIntervals: null
    }
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.elapsedTime}</Text>
        </View>
        <View style={Style.inputContainer}>
          { this._renderInputButtons() }
        </View>
      </View>
    )
  }

  _renderInputButtons() {

    return inputButtons.map(function (input, idx) {
      return <InputButton key={idx} value={input}/>
    })

  }

  // _onButtonPress(label) {

  // }

}

AppRegistry.registerComponent('ReactStopWatch', () => ReactStopWatch)