import { Text, StyleSheet } from 'react-native'


export const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#664f06",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#664f06",
    padding: 12,
    borderRadius: 12,
  },
})