import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { GoalItem } from './components/goal-item'
import { GoalInput } from './components/goal-input'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [goals, setGoals] = useState([])

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }
  
  const addGoalHandler = (enteredGoal) => {
    setGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() }
    ])
  }

  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#6aa8f9"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            )
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
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
  goalsContainer: {
    flex: 5, // This will make the goals container take up 5/6 of the screen
  },
})
