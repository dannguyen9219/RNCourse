// import React, { useState } from 'react'
// import { StyleSheet, View, FlatList, Button } from 'react-native'
// import { StatusBar } from 'expo-status-bar'


// // Application Screen || Define Imports
// // =================================================================================================
// // =================================================================================================
// import { GoalItem } from './components/goal-item'
// import { GoalInput } from './components/goal-input'


// // Application Screen || Define Exports
// // =================================================================================================
// // =================================================================================================
// export default function App() {
//   const [modalIsVisible, setModalIsVisible] = useState(false)
//   const [goals, setGoals] = useState([])

//   const startAddGoalHandler = () => {
//     setModalIsVisible(true)
//   }

//   const endAddGoalHandler = () => {
//     setModalIsVisible(false)
//   }
  
//   const addGoalHandler = (enteredGoal) => {
//     setGoals(currentGoals => [
//       ...currentGoals,
//       { text: enteredGoal, id: Math.random().toString() }
//     ])
//     endAddGoalHandler()
//   }

//   const deleteGoalHandler = (id) => {
//     setGoals(currentGoals => {
//       return currentGoals.filter((goal) => goal.id !== id)
//     })
//   }

//   return (
//     <>
//       <StatusBar style="dark" />
//       <View style={styles.appContainer}>
//         <Button
//           title="Add New Goal"
//           color="#0a7574f7"
//           onPress={startAddGoalHandler}
//         />
//         <GoalInput
//           visible={modalIsVisible}
//           onAddGoal={addGoalHandler}
//           onCancel={endAddGoalHandler}
//         />
//         <View style={styles.goalsContainer}>
//           <FlatList
//             data={goals}
//             renderItem={itemData => {
//               return (
//                 <GoalItem
//                   text={itemData.item.text}
//                   id={itemData.item.id}
//                   onDeleteItem={deleteGoalHandler}
//                 />
//               )
//             }}
//             keyExtractor={(item, index) => {
//               return item.id
//             }}
//           />
//         </View>
//       </View>
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1, // This will make the app container take up the entire screen
//     marginTop: 10,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//     backgroundColor: "#ffffff",
//   },
//   goalsContainer: {
//     flex: 5, // This will make the goals container take up 5/6 of the screen
//   },
// })

import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Alert } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { Title } from '../components/title'
import { Card } from '../components/card'
import { InstructionText } from '../components/instruction-text'
import { PrimaryButton } from '../components/primary-button'
import { COLORS } from '../utilities/colors'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)
    
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be between 1 and 99.',
        [{ text: 'Try Again', style: 'destructive', onPress: resetInputHandler }]
      )
      return
    }
    onPickNumber(chosenNumber)
  }
  
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.primary700,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
})
