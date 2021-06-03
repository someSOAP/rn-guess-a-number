import React, { FC } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Card } from '@components/Card'
interface IStartGameScreenProps {
  [key: string]: any
}

export const StartGameScreen: FC<IStartGameScreenProps> = ({ children }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
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
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 20,
    // FOR iOS
    // shadowColor: 'black',
    // shadowOffset: { width: 300, height: 3 },
    // shadowOpacity: 0.26,
    // shadowRadius: 6,
    elevation: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
})

export default StartGameScreen
