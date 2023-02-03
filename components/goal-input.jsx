import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"


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
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Fitness Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#dc596d" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#0a7574f7" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // This will make the input container take up 1/4 of the screen
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#a3faf8b7",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fcfcfc",
    backgroundColor: "#fcfcfc",
    color: "#120438",
    width: "100%",
    padding: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
})
