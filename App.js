import { StyleSheet, Text, View, Button, TextInput } from 'react-native'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Fitness Goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 10,
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
})
