import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert, FlatList } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Title } from '../components/title'
import { Card } from '../components/card'
import { InstructionText } from '../components/instruction-text'
import { GenerateRandomBetween } from '../utilities/game-logic'
import { NumberContainer } from '../components/number-container'
import { GuessLogItem } from '../components/guess-log-item'
import { PrimaryButton } from "../components/primary-button"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
let minBoundary = 1
let maxBoundary = 100

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = GenerateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
     onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])
  
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
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds])
  }

  const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name="upcircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="downcircleo" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
          data={guessRounds}
          renderItem={
            (itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              /> 
            )
          }
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  listContainer: {
    flex: 1,
    padding: 5,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
})
