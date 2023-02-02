import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [goals, setGoals] = useState([])
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, enteredGoal])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Fitness Goal"
          onChangeText={goalInputHandler}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // This will make the app container take up the entire screen
    marginTop: 10,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5, // This will make the goals container take up 3/4 of the screen
  },
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
