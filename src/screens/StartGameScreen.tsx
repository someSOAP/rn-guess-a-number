import React, { FC, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import { Card } from '@components/Card'
import { CustomButton } from '@components/CustomButton'
import { Input } from '@components/Input'
import { NumberContainer } from '@components/NumberContainer'
import { BoldText } from '@components/BoldText'
import { SECONDARY } from '@color'
import { useWindow } from '@utils/hooks'

interface IStartGameScreenProps {
  onStartGame: (selectedNumber: number) => void
}

export const StartGameScreen: FC<IStartGameScreenProps> = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState<string>('')
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const [selectedNumber, setSelectedNumber] = useState<number>(0)

  const window = useWindow()

  const portrait = window.height > window.width

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const hideKeyboard = () => Keyboard.dismiss()

  const startGameHandler = () => onStartGame(selectedNumber)

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Value must be a number in range from 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
    }
    setConfirmed(true)
    setEnteredValue('')
    setSelectedNumber(chosenNumber)
    hideKeyboard()
  }

  let confirmedOutput: React.ReactNode

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected:</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <CustomButton onPress={startGameHandler}>Start Game</CustomButton>
      </Card>
    )
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <BoldText style={styles.title}>Start a New Game!</BoldText>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <View style={styles.screen}>
            <Card style={styles.inputContainer}>
              <Text>Select a Number</Text>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={numberInputHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <CustomButton
                  style={styles.resetButton}
                  onPress={resetInputHandler}
                >
                  Reset
                </CustomButton>
                <CustomButton
                  style={styles.button}
                  onPress={confirmInputHandler}
                >
                  Confirm
                </CustomButton>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    width: 70,
    height: 50,
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    width: 100,
  },
  resetButton: {
    width: 100,
    backgroundColor: SECONDARY,
  },
  inputContainer: {
    width: '80%',
    minWidth: 300,
    maxWidth: '95%',
    alignItems: 'center',
  },
  summaryContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
})

export default StartGameScreen
