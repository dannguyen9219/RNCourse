import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'


// Application Screen || Define imports
// =================================================================================================
// =================================================================================================
import { StartGameScreen } from './screens/start-game-screen'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export default function App() {
  return (
    <StartGameScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
