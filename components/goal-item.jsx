import React from "react"
import { View, Text, StyleSheet } from "react-native"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 2,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "aliceblue",
  },
  goalText: {
    color: "black",
  }
})
