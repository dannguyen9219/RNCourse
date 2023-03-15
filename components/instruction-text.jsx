import React from "react"
import { Text, StyleSheet } from "react-native"


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { COLORS } from "../utilities/colors"


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const InstructionText = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: COLORS.primary700,
    fontSize: 24,
    fontWeight: "bold",
  },
})
