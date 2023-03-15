import { Text, StyleSheet } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { COLORS } from '../utilities/colors'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: COLORS.accent600,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.accent600,
    padding: 12,
    borderRadius: 12,
  },
})
