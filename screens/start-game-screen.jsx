import React from 'react'
import { TextInput, Pressable, View } from 'react-native'


// Application Screen || Define Imports
// =================================================================================================
// =================================================================================================
import { PrimaryButton } from '../components/primary-button'


// Application Screen || Define Exports
// =================================================================================================
// =================================================================================================
export const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}
