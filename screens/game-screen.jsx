import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { COLORS } from '../utilities/colors'
import { Title } from '../components/title'
import { GenerateRandomBetween } from '../utilities/game-logic'
import { NumberContainer } from '../components/number-container'
import { PrimaryButton } from "../components/primary-button"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
let minBoundary = 1
let maxBoundary = 100

export const GameScreen = ({ userNumber }) => {
  const initialGuess = GenerateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const nextGuessHandler = (direction) => {
    if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
      Alert.alert(
        "Don't Lie!",
        "You know that this is wrong...",
        [{ text: "Sorry!", style: "cancel" }]
      )
      return
    }

    if (direction === "lower") {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRandomNumber = GenerateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandomNumber)
  }
  
  return (
    <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>Higher</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>Lower</PrimaryButton>
        </View>
      </View>
      <View>
        {/* LOG ROUNDS */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
