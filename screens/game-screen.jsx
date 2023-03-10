import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { COLORS } from '../utilities/colors'
import { Title } from '../components/title'
import { GenerateRandomBetween } from '../utilities/game-logic'
import { NumberContainer } from '../components/number-container'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const GameScreen = ({userNumber}) => {
  const initialGuess = GenerateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  
  return (
    <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        {/* +
        - */}
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
