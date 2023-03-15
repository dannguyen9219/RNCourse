import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Title } from '../components/title'
import { COLORS } from '../utilities/colors'
import { PrimaryButton } from '../components/primary-button'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const GameOverScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/game-over.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        The Computer needed <Text style={styles.highlight}>X</Text> rounds to guess your number <Text style={styles.highlight}>Y</Text>.
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary800,
  },
})
