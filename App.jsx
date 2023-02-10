import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


// Application Screen || Define imports
// =================================================================================================
// =================================================================================================
import { StartGameScreen } from './screens/start-game-screen'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export default function App() {
  return (
    <LinearGradient colors={["#ffc45e" ,"#ffb3b3"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
