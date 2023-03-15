import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Title } from '../components/title'
import { COLORS } from '../utilities/colors'


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
      <Text>
        The Computer needed X rounds to guess your number Y.
      </Text>
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
})
