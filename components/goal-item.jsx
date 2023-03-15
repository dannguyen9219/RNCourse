import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ffa6a6" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 2,
    borderRadius: 6,
    backgroundColor: "aliceblue",
  },
  goalText: {
    color: "black",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  }
})
