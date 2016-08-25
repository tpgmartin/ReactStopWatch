import { StyleSheet } from 'react-native'

var Style = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  displayText: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#eee'
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5
  },
  inputButtonText: {
  }
})

export default Style