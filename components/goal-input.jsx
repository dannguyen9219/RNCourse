import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal("")
  }
  
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Fitness Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // This will make the input container take up 1/4 of the screen
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
})
