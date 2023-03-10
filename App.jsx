import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


// Application Screen || Define imports
// =================================================================================================
// =================================================================================================
import { COLORS } from './utilities/colors'
import { StartGameScreen } from './screens/start-game-screen'
import { GameScreen } from './screens/game-screen'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export default function App() {
  const [userNumber, setUserNumber] = useState()

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }
  
  return (
    <LinearGradient colors={[COLORS.primary700 ,COLORS.primary900]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
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
