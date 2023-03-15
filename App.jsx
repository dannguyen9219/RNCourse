import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { GoalItem } from './components/goal-item'
import { GoalInput } from './components/goal-input'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [goals, setGoals] = useState([])

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }
  
  const addGoalHandler = (enteredGoal) => {
    setGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() }
    ])
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#0a7574f7"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // This will make the app container take up the entire screen
    marginTop: 10,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  goalsContainer: {
    flex: 5, // This will make the goals container take up 5/6 of the screen
  },
})


///// GUESS MY NUMBER GAME APP /////
// import React, { useState, useCallback } from 'react'
// import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient'
// import { useFonts } from 'expo-font'
// import * as SplashScreen from 'expo-splash-screen'


// // Application Screen || Define imports
// // =================================================================================================
// // =================================================================================================
// import { COLORS } from './utilities/colors'
// import { GameOverScreen } from './screens/game-over-screen'
// import { StartGameScreen } from './screens/start-game-screen'
// import { GameScreen } from './screens/game-screen'


// // Application Screen || Define Exports
// // =================================================================================================
// // =================================================================================================
// // Guess My Number APP
// export default function App() {
//   const [userNumber, setUserNumber] = useState()
//   const [gameIsOver, setGameIsOver] = useState(true)
//   const [guessRounds, setGuessRounds] = useState(0)

//   const [fontsLoaded] = useFonts({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   })

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync()
//     }
//   }, [fontsLoaded])

//   if (!fontsLoaded) {
//     return null
//   }

//   const pickedNumberHandler = (pickedNumber) => {
//     setUserNumber(pickedNumber)
//     setGameIsOver(false)
//   }
  
//   const gameOverHandler = (numberOfRounds) => {
//     setGameIsOver(true)
//     setGuessRounds(numberOfRounds)
//   }

//   const startNewGameHandler = () => {
//     setUserNumber(null)
//     setGuessRounds(0)
//   }

//   let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

//   if (userNumber) {
//     screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
//   }

//   if (gameIsOver && userNumber) {
//     screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
//   }
  
//   return (
//     <LinearGradient colors={[COLORS.primary700 ,COLORS.primary900]} style={styles.rootScreen}>
//       <ImageBackground
//         source={require("./assets/images/dice.png")}
//         resizeMode="cover"
//         style={styles.rootScreen}
//         imageStyle={styles.backgroundImage}
//       >
//         <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
//           {screen}
//         </SafeAreaView>
//       </ImageBackground>
//     </LinearGradient>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: {
//     opacity: 0.15,
//   },
// })
