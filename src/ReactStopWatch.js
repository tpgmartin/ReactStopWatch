import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View
} from 'react-native'
import InputButton from './InputButton'
import Style from './Style'

const inputButtons = [
  'pause',
  'start',
  'stop'
]

class ReactStopWatch extends Component {

  constructor(props) {
    super(props)

    this.state = {
      elapsedMilliseconds: 0,
      elapsedMinutes: 0,
      elapsedSeconds: 0,
      elapsedTime: 0,
      totalTime: 0,
      timeIntervals: [],
      isRunning: false
    }
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.elapsedMinutes}m {this.state.elapsedSeconds}s {this.state.elapsedMilliseconds}</Text>
        </View>
        <View style={Style.inputContainer}>
          { this._renderInputButtons() }
        </View>
        <View>
          <Text>Intervals</Text>
          <Text>{this.state.timeIntervals.join(' ')}</Text>
          <InputButton value={'clear'} onPress={this._onInputButtonPress.bind(this, 'clear') }/>
        </View>
      </View>
    )
  }

  _renderInputButtons() {
    let views = []

    for (let i = 0; i < inputButtons.length; i++) {
      let input = inputButtons[i]
      views.push(<InputButton key={i} value={input}
        onPress={this._onInputButtonPress.bind(this, input) }/>)
    }

    return views

  }

  _clearTimeIntervals() {
    this.setState({
      timeIntervals: []
    })
  }

  _pauseStopwatch() {
    this.setState({
      elapsedTime: this.state.elapsedTime,
      isRunning: false,
      totalTime: this.state.elapsedTime
    })
  }

  _startStopwatch() {
    const self = this
    if (this.state.isRunning) {
      setTimeout(function () {
        // let newElapsedTime = self.state.elapsedTime + 1
        // let newElapsedMilliseconds, newElapsedSeconds

        // newElapsedMilliseconds = newElapsedTime

        // if (newElapsedMilliseconds === 100) {
        // let newElapsedSeconds = newElapsedTime - 100 
        // let newElapsedMilliseconds = newElapsedTime % 100
        // }

        self.setState({
          elapsedMilliseconds: (self.state.elapsedTime + 1 === 100) ? 0 : self.state.elapsedTime + 1,
          elapsedTime: self.state.elapsedTime + 1
        })
        self._startStopwatch()
      }, 1)
    }
  }

  _stopStopwatch() {
    let intervals = this.state.timeIntervals
    intervals.push(this.state.elapsedTime)
    this.setState({
      elapsedMilliseconds: 0,
      elapsedSeconds: 0,
      elapsedTime: 0,
      isRunning: false,
      timeIntervals: intervals,
      totalTime: this.state.elapsedTime
    })
  }

  _onInputButtonPress(input) {
    switch (input) {
      case 'clear':
        return this._clearTimeIntervals()
      case 'pause':
        return this._pauseStopwatch()
      case 'start':
        this.state.isRunning = true
        return this._startStopwatch()
      case 'stop':
        return this._stopStopwatch()
    }
  }

}

AppRegistry.registerComponent('ReactStopWatch', () => ReactStopWatch)