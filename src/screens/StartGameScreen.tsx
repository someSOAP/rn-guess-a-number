import React, { FC } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Card } from '@components/Card'
import { CustomButton } from '@components/CustomButton'
import { SECONDARY } from '@color'

interface IStartGameScreenProps {
  [key: string]: any
}

export const StartGameScreen: FC<IStartGameScreenProps> = ({ children }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <CustomButton style={styles.resetButton}>Reset</CustomButton>
          <CustomButton style={styles.button}>Confirm</CustomButton>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  resetButton: {
    width: 100,
    backgroundColor: SECONDARY,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
  },
})

export default StartGameScreen
