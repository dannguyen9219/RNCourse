import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Title } from '../components/title'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const GameScreen = () => {
  return (
    <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
      {/* GUESS */}
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
